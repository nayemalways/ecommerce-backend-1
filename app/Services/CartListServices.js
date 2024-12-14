
/*-----------------DEPENDENCIES------------*/
import CartModel from "../models/UsersModel/CartModel.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;





export const SaveProductToCartService = async (req) => {
    try {

        const userID = new ObjectId( req.headers.user_id);
        const reqBody = req.body;

        /*-----INJECT USERID TO CART LIST-----*/
        reqBody.userID = userID;

        /*--------ADD PRODUCT TO CART--------*/
        await CartModel.create(reqBody);


        /*---------------------RETURN STATUS--------------------*/
        return {status: "Success", message: "Product added to cart suuccessful!"};

    }catch(e) {
        console.log(e);
        return {status: "Error", message: "Internal server error"}
    }
}


export const UpdateProductOfCartService = async (req) => {
    try {

    }catch(e) {
        console.log(e);
        return {status: "Error", message: "Internal server error"}
    }
}


export const RemoveProductFromCartService = async (req) => {
    try {

    }catch(e) {
        console.log(e);
        return {status: "Error", message: "Internal server error"}
    }
}