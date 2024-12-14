
/*----------------------------DEPENDENCIES---------------------------*/
import mongoose from "mongoose";
import CartModel from "../models/UsersModel/CartModel";
import ProfileModel from "../models/UsersModel/UserProfiles";
import InvoiceModel from "../models/InvoiceAndPayment/InvoiceModel.js";
import InvoiceProductModel from "../models/InvoiceAndPayment/InvoiceProductsModel.js"
import PaymentSettingModel from "../models/InvoiceAndPayment/PaymentSettingsModel.js";
import axios from "axios";
import FormData from "form-data";
const ObjectID = mongoose.Types.ObjectId;






export const CreateInvoiceService = async (req) => {
    try {

        /*====^=============^==============<>Step 01: Calculate Total Payable & Vat<>================^=================^========*/
        /*====^=============^==============<>Step 02: Prepare Customer Details & Shipping Details<>==^================^=========*/
        /*====^=============^==============<>Step 03: Transection & Other's ID<>=====================^=================^========*/
        /*====^=============^==============<>Step 04: Create Invoice<>===============================^=================^========*/
        /*====^=============^==============<>Step 05: Create Invoice Product<>=======================^=================^========*/



    }catch(e) {

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
 