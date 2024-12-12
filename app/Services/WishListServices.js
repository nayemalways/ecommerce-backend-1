import WishListModel from '../models/UsersModel/WishesModel.js';




export const WishListService = async (req) => {

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