import { CreateInvoiceService, PaymentFailService, PaymentCancelService, PaymentIPNService, PaymentSuccessService, InvoiceListService, InvoiceProductListService } from "../Services/InvoiceServices.js"
import InvoiceModel from "../models/InvoiceAndPayment/InvoiceModel.js";










// INVOICE CONTROLLER FUNCTION
export const CreateInvoice = async (req, res) => {
    const result = await CreateInvoiceService(req);
    res.json(result);
}


export const InvoiceList = async (req, res) => {
    const result = await InvoiceListService(req);
    res.json(result);
}




export const InvoiceProductList = async (req, res) => {
    const result = await InvoiceProductListService(req);
    res.json(result);
}



// PAYMENT CONTROLLER FUNCTION

export const PaymentSuccess = async (req, res) => {
    const result = await PaymentSuccessService(req);
    res.json(result);
}


export const PaymentFail = async (req, res) => {
    const result = await PaymentFailService(req);
    res.json(result);
}


export const PaymentCancel = async (req, res) => {
    const result = await PaymentCancelService(req);
    res.json(result);
}


export const PaymentIPN = async (req, res) => {
    const result = await PaymentIPNService(req);
    res.json(result);
}







/*export const deleteInvoice = async (req, res) => {
    try {
        const user_id = req.headers.user_id;

    const data = await InvoiceModel.deleteMany({userID: user_id});
    res.json({status: "Success", data: data})
    }catch(e) {
        console.log(e);
        return res.json({status: "Error"})
    }
}
*/


