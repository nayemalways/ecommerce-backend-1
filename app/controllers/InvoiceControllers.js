import { CreateInvoiceService, PaymentFailService, PaymentCancelService, PaymentIPNService, PaymentSuccessService } from "../Services/InvoiceServices.js"











// INVOICE CONTROLLER FUNCTION
export const CreateInvoice = async (req, res) => {
    const result = await CreateInvoiceService(req);
    res.json(result);
}


export const InvoiceList = async (req, res) => {
    const result = await PaymentSuccessService(req);
    res.json(result);
}




export const InvoiceProductList = async (req, res) => {
    const result = await PaymentSuccessService(req);
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





