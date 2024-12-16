
/*----------------------------DEPENDENCIES---------------------------*/
import mongoose from "mongoose";
import CartModel from "../models/UsersModel/CartModel.js";
import ProfileModel from "../models/UsersModel/UserProfiles.js";
import InvoiceModel from "../models/InvoiceAndPayment/InvoiceModel.js";
import InvoiceProductModel from "../models/InvoiceAndPayment/InvoiceProductsModel.js"
import PaymentSettingModel from "../models/InvoiceAndPayment/PaymentSettingsModel.js";
import axios from "axios";
import FormData from "form-data";
const ObjectID = mongoose.Types.ObjectId;






export const CreateInvoiceService = async (req) => {
    try {



        const userID = new ObjectID(req.headers.user_id);
        const userEamil = req.headers.email;



        /*====^=============^==============<>Step 01: Calculate Total Payable & Vat<>================^=================^========*/
        const matchStage = {$match: {userID}};
        const JoinWithProduct = {$lookup: {from: "products", localField: "productID", foreignField: "_id", as: "product"}}
        const UnwindProductStage = {$unwind: "$product"};

        // Get Product from Cart-List
        const CartProducts = await CartModel.aggregate([
            matchStage,
            JoinWithProduct,
            UnwindProductStage
        ])

        
        // Calculate the products price from Cart-List
        let totalAmount = 0;
        CartProducts.forEach((element) => {
            let price;
            if(element['product']['discount']) {
                price = parseFloat(element['product']['discountPrice']);
            }else {
                price = parseFloat(element['product']['price']);
            }

            totalAmount += parseFloat(element['qty']) * price;
        })

        const vat = totalAmount * 0.05; // 5% Vat
        const payable = totalAmount + vat; // 

      



        /*====^=============^==============<>Step 02: Prepare Customer Details & Shipping Details<>==^================^=========*/
        const profile = await ProfileModel.aggregate([matchStage]);
        const cus_details = `Name: ${profile[0]['cus_name']}, Email: ${userEamil}, Address: ${profile[0]['cus_address']}, Phone: ${profile[0]['cus_phone']}, City: ${profile[0]['cus_city']}, Country: ${profile[0]['cus_country']}` ;
        const ship_details = `Name: ${profile[0]['ship_name']}, Address: ${profile[0]['ship_address']}, Phone: ${profile[0]['ship_phone']}, City: ${profile[0]['ship_city']}, Country: ${profile[0]['ship_country']}` ;





        /*====^=============^==============<>Step 03: Transection & Other's ID<>=====================^=================^========*/
        const tran_id = Math.floor(10000000 + Math.random() * 90000000);
        const val_id = 0;
        const delivery_status = "pending";
        const payment_status = "pending";





        /*====^=============^==============<>Step 04: Create Invoice<>===============================^=================^========*/
        const createInvoice = await InvoiceModel.create({
                userID: userID,
                payable:  payable,
                cus_details: cus_details,
                ship_details: ship_details,
                tran_id: tran_id,
                val_id: val_id,
                delevary_status: delivery_status,
                payment_status: payment_status,
                total: totalAmount,
                vat: vat
        })






        /*====^=============^==============<>Step 05: Create Invoice Product<>=======================^=================^========*/
        const invoice_id = createInvoice['_id'];

        CartProducts.forEach(async (element) => {
            await InvoiceProductModel.create({
                    userID: userID,
                    productID: element['productID'],
                    invoiceID:  invoice_id,
                    qty: element['qty'],
                    price: element['product']['discount'] ? element['product']['discountPrice'] : element['product']['price'],
                    color: element['color'],
                    size: element['size']
            })
        })

        


         /*====^=============^==============<>Step 06: Remove Cart List<>=======================^=================^===========*/
         await CartModel.deleteMany({userID});
         



        /*====^=============^==============<>Step 07: Prepare SSL payment<>=======================^=================^========*/
        const PaymentSettings = await PaymentSettingModel.find();
        const form = new FormData();

        // SSL CREDENTIALS
        form.append("store_id", PaymentSettings[0]["store_id"]);
        form.append("store_passwd", PaymentSettings[0]["store_passwd"]);
        form.append("total_amount", payable.toString());
        form.append("currency", PaymentSettings[0]["currency"]);
        form.append("tran_id",  tran_id);
        form.append("success_url", PaymentSettings[0]["success_url"]);
        form.append("fail_url", PaymentSettings[0]["fail_url"]);
        form.append("cancel_url", PaymentSettings[0]["cancel_url"]);
        form.append("ipn_url", PaymentSettings[0]["ipn_url"]);

        
        // CUSTOMER DETAILS
        form.append("cus_name", profile[0]['cus_name']);
        form.append("cus_email", userEamil);
        form.append("cus_add1", profile[0]['cus_address']);
        form.append("cus_add2", profile[0]['cus_address']);
        form.append("cus_city", profile[0]['cus_city']);
        form.append("cus_state", profile[0]['cus_state']);
        form.append("cus_postcode", profile[0]['cus_postcode']);
        form.append("cus_country", profile[0]['cus_country']);
        form.append("cus_phone", profile[0]['cus_phone']);
        form.append("cus_fax", profile[0]['cus_phone']);

            
        // SHIPPING DETAILS
        form.append("shipping_method", "YES");
        form.append("ship_name", profile[0]['ship_name']);
        form.append("ship_add1", profile[0]['ship_address']);
        form.append("ship_add2", profile[0]['ship_address']);
        form.append("ship_city", profile[0]['ship_city']);
        form.append("ship_sub_city", profile[0]['ship_city']);
        form.append("ship_state", profile[0]['ship_state']);
        form.append("ship_postcode", profile[0]['ship_postcode']);
        form.append("ship_country", profile[0]['ship_country']);


        form.append("product_name",  "According to Invoice");
        form.append("product_category",  "According to Invoice");
        form.append("product_profile",  "According to Invoice");
        form.append("product_amount",  "According to Invoice");
        


        // REQUESTED TO SSL ECOMMERZ FOR PAYMENT
        const SSL_Response = await axios.post(PaymentSettings[0]["init_url"], form);


        return {status: "Success",  data: SSL_Response.data }

    }catch(e) {
        console.log(e.toString());
        return {status: "Error", message: "Internal Server error..!"}
    }
}



export const PaymentFailService = async (req) => {

}



export const PaymentCancelService = async (req) => {

}



export const PaymentIPNService = async (req) => {

}



export const PaymentSuccessService = async (req) => {

}



export const InvoiceList = async (req) => {
     
}



export const InvoiceProductList = async (req) => {
   
}
 