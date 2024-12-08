import BrandModel from '../models/ProductModel/brandModel.js';
import CategoryModel from '../models/ProductModel/categoryModel.js';
import ProductModel from '../models/ProductModel/productModel.js';
import ProductSliderModel from '../models/ProductModel/productSliderModel.js';
import ProductDetailsModel from '../models/ProductModel/productDetailsModel.js';
import ReviewModel from '../models/ProductModel/ReviewModel.js';
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;



export const BrandListService = async () => {
    try {
        // Find Brand Data
        const data = await BrandModel.find();
        return {status: "Success", data: data};

    }catch(e) {
        console.log(e);
        return {status: "error", message: "Internal server error"};
    }
}


export const CategoryListService = async () => {
    try {
        // Category Data
        const data = await  CategoryModel.find();
        return{status: "Success", data: data};

    }catch(e) {
        console.log(e);
        return {status: "error", message: "Internal server error"};
    }
}


export const SliderListService = async () => {
    try {
        // Slider Data
        const data = await ProductSliderModel.find();
        return {status: "Success", data: data};

    }catch(e) {
        console.log(e);
        return {status: "error", message: "Internal server error"};
    }
}





export const ListByBrandService = async (req) => {
   
    try {
        const BrandId = new ObjectId(req.params.brandId);

        //Database Query
        const MatchStage = {$match: {brandID: BrandId}};
        const JoinWithBrandStage = {$lookup: {from: "brands", localField: "brandID", foreignField: "_id", as: "brand"}};
        const JoinWithCategoryStage = {$lookup: {from: "categories", localField: "categoryID", foreignField: "_id", as: "category"}};
        const UnwindBrandStage = {$unwind: "$brand"};
        const UnwindCategoryStage = {$unwind: "$category"};
    
    
        // Database operation
        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage
        ])
    
        return {status: "Success", data: data};
 
    }catch(e) {
        console.log(e);
        return {status: "error", message: "Internal server error"};
        
    }

}

export const ListByCategoryService = async (req) => {
    try {
        const categoryID = new ObjectId(req.params.categoryID);

        // Query
        const match = {$match:{categoryID: categoryID}};
        const JoinWithBrandStage = {$lookup: {from: "brands", localField: "brandID", foreignField: "_id", as: "brand"}};
        const JoinWithCategoryStage = {$lookup: {from: "categories", localField: "categoryID", foreignField: "_id", as: "category"}};
        const UnwindBrandStage = {$unwind: "$brand"};
        const UnwindCategoryStage = {$unwind: "$category"};
        const projection = {$project: {categoryID: 0, brandID: 0, "brand._id": 0, "brand.createdAt": 0, "brand.updatedAt": 0,  "category._id": 0, "category.createdAt": 0, "category.updatedAt": 0}};

        // Data Retriving
        const data = await ProductModel.aggregate([
            match,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            projection
        ])

        return {status: "Success", data: data};
    }catch(e) {
        console.log(e);
        return {status: "Error", message:"Internal server error..!"}
    }
}


export const ListByRemarkService = async (req) => {
    try {
        const Remark = req.params.Remark;

    // Query
    const match = {$match: {remark: Remark}};
    const JoinWithBrandStage = {$lookup: {from: "brands", localField: "brandID", foreignField: "_id", as: "brand"}};
    const JoinWithCategoryStage = {$lookup: {from: "categories", localField: "categoryID", foreignField: "_id", as: "category"}};
    const UnwindBrandStage = {$unwind: "$brand"};
    const UnwindCategoryStage = {$unwind: "$category"};
    const projection = {$project: {categoryID: 0, brandID: 0, "brand._id": 0, "brand.createdAt": 0, "brand.updatedAt": 0,  "category._id": 0, "category.createdAt": 0, "category.updatedAt": 0}};

    // Data Retiriving
const data = await ProductModel.aggregate([
    match,
    JoinWithBrandStage,
    JoinWithCategoryStage,
    UnwindBrandStage,
    UnwindCategoryStage,
    projection
])

return {status: "Success", data: data};
    }catch(e) {
        console.log(e);
        return {Status: "Error", message: "Inernal Server error...!"}
    } 
}




export const ListBySimilarService = async (req) => {

}


export const ListByKewwordService = async (req) => {

}






export const DetailsService = async (req) => {

}





export const ReviewsListService = async (req) => {

}
 

 