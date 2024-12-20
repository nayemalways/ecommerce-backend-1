import FeaturesModel from "../models/InvoiceAndPayment/FeaturesModel.js";


export const FeaturesListService = async (req, res) => {
    try {

        const data = await FeaturesModel.find();
        return {status: "Success", data: data};
        
    }catch(e) {
        console.log(e);
        return {status: "Error", message: "Internal server error..!"};
    }
}