
/*------------------DEPENDENCIES------------------*/
import WishListModel from '../models/UsersModel/WishesModel.js';
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;




/* 
---------------------------------------------------------------------------------
*** WISH LIST LOGIC BUILD ***
THIS IS THE HELPER FILE FOR THE WISHLISTCONTROLLERS.JS FILE.
ALL THE CONTROLLER LOGIC IS BUILT HERE!
----------------------------------------------------------------------------------
*/


export const WishListService = async (req) => {

    try {

        const user_id = new ObjectId(req.headers.user_id);

        /*----------------- DATABASE QUERY--------------------*/
        const matchStage = {$match: {userID: user_id}};

        const JoinWithProductStage = {$lookup: {from: "products", localField: "productID", foreignField: "_id", as: "products"}};
        const UnwindProductStage = {$unwind: "$products"};

        const JoinWithBrandStage = {$lookup: {from: 'brands', localField: "products.brandID", foreignField: "_id", as: "brand"}};
        const UnwindBrandStage = {$unwind: "$brand"};
        
        const JoinWithCategoryStage = {$lookup: {from: "categories", localField: "products.categoryID", foreignField: "_id", as: "category"}};
        const UnwindCategoryStage = {$unwind: "$category"};

        const projectionStage = {$project: {
            "products.createdAt": 0, 
            "products.updatedAt": 0,
            "products.brandID": 0,
            "products.categoryID": 0,

            "brand._id": 0, 
            "brand.updatedAt": 0,
            "brand.createdAt": 0, 

            "category._id": 0, 
            "category.updatedAt": 0,
            "category.createdAt": 0, 

        }}



        /*--------JOIN PRODUCT WITH WISH LIST MODEL----------*/
        const data = await WishListModel.aggregate([
            matchStage,
            JoinWithProductStage,
            UnwindProductStage,
            JoinWithBrandStage,
            UnwindBrandStage,
            JoinWithCategoryStage,
            UnwindCategoryStage,
            projectionStage
        ]);

        /*----------RETURN DATA-----------*/
        return {status: "Success", data: data};

    }catch(e) {
        console.log(e);
        return {status: "Error", message: "Internal server error..!"}
    }


}



export const SaveWishListService = async (req) => {
    try {
        const userID = req.headers.user_id;
        const reqBody = req.body;
        reqBody.userID = userID;

        await WishListModel.updateOne(reqBody, {$set: reqBody}, {upsert: true})
        return {status: "Success", message: "Wish list save success"};


    }catch(e) {
        console.log(e);
        return {status: "Error", message: "Internal Server error..!"}
    }
}




export const WishListRemoveService = async (req) => {
    try {
        const userID = req.headers.user_id;
        const reqBody = req.body;
        reqBody.userID = userID;

        await WishListModel.deleteOne(reqBody)
        return {status: "Success", message: "Wish list delete success"};


    }catch(e) {
        console.log(e);
        return {status: "Error", message: "Internal Server error..!"}
    }
}