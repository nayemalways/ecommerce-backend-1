
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
        
        const userID = new ObjectId( req.headers.user_id);
        const reqBody = req.body;

        /*-----INJECT USERID TO CART LIST-----*/
        reqBody.userID = userID;


         /*---REMOVE CART LIST PRODUCT----*/
        await CartModel.deleteOne(reqBody);

         /*---------------------RETURN STATUS--------------------*/
        return {status: "Success", message: "Product Removed form Cart-List"}

    }catch(e) {
        console.log(e);
        return {status: "Error", message: "Internal server error"}
    }
}




export const SelectCartListProductService = async (req) => {
    try {

        const userId = new ObjectId(req.headers.user_id);

        /*----------------- DATABASE QUERY--------------------*/
        const matchStage = {$match:{userID: userId}};
        
        const JoinWithProductStage = {$lookup: {from: "products", localField: "productID", foreignField: "_id", as: "product"}};
        const UnwindProductStage = {$unwind: "$product"};

        const JoinWithBrandStage = {$lookup: {from: "brands", localField: "product.brandID", foreignField: "_id", as: "brand"}};
        const UnwindBrandStage = {$unwind: "$brand"};

        const JoinWithCategoryStage = {$lookup: {from: "categories", localField: "product.categoryID", foreignField: "_id", as: "Category"}};
        const UnwindCategoryStage = {$unwind: "$Category"};

        const projectionStage = {$project: {
            "product.createdAt": 0,
            "product.updatedAt": 0,
            "product.brandID": 0,
            "product.categoryID": 0,
            "brand.updatedAt": 0,
            "brand.createdAt": 0,
            "brand._id": 0,
            "Category._id": 0,
            "Category.createdAt": 0,
            "Category.updatedAt": 0,
        }}


        
        /*--------JOIN PRODUCT WITH WISH LIST MODEL AND SELECT DATA----------*/
        const data = await CartModel.aggregate([
            matchStage,
            JoinWithProductStage,
            UnwindProductStage,
            JoinWithBrandStage,
            UnwindBrandStage,
            JoinWithCategoryStage,
            UnwindCategoryStage,
            projectionStage
        ])


        /*----------RETURN DATA-----------*/
        return {status: "Success", data: data};


    }catch(e) {
        console.log(e);
        return {status: "Error", message: "Internal server error"}
    }
}
