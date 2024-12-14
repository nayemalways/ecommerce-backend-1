
/*-----------------DEPENDENCIES------------*/
import CartModel from "../models/UsersModel/CartModel.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;





export const SaveProductToCartService = async (req) => {
    try {

        


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