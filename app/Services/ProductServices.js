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
 
        // Checking Found or Not
        if(!data || data.length === 0) {
            return null;
        }

        // Final Result
        return data;

    }catch(e) {
        console.log(e);
        return {status: "error", message: "Internal server error"};
    }
}





export const ListByBrandService = async (req) => {
   
    try {
        const BrandId = new ObjectId(req.params.brandId);

        const MatchStage = {$match: {brandID: BrandId}};
        const JoinWithBrandStage = {$lookup: {from: "brands", localField: "brandID", foreignField: "_id", as: "brand"}};
        const JoinWithCategoryStage = {$lookup: {from: "categories", localField: "categoryID", foreignField: "_id", as: "category"}};
        const UnwindBrandStage = {$unwind: "$brand"};
        const UnwindCategoryStage = {$unwind: "$category"};
    
    
    
        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage
        ])
    
    
        // Checking Found or Not
        if(!data || data.length === 0) {
            return null;
        }
    
        // Final Result
        return data;
 
    }catch(e) {
        console.log(e);
        return {status: "error", message: "Internal server error"};
        
    }

}





export const ListByCategoryService = async (req) => {

}





export const ListBySimilarService = async (req) => {

}





export const ListByKewwordService = async (req) => {

}





export const ListByRemarkService = async (req) => {

}





export const DetailsService = async (req) => {

}





export const ReviewsListService = async (req) => {

}
 

 