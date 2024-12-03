import BrandModel from '../models/ProductModel/brandModel.js';
import CategoryModel from '../models/ProductModel/categoryModel.js';
import ProductModel from '../models/ProductModel/productModel.js';
import ProductSliderModel from '../models/ProductModel/productSliderModel.js';
import ProductDetailsModel from '../models/ProductModel/productDetailsModel.js';
import ReviewModel from '../models/ProductModel/ReviewModel.js';



export const BrandListService = async () => {
    try {
        // Find Brand Data
        const data = await BrandModel.find();

        // Checking Found or Not
        if(!data || data.length === 0) {
            return null;
        }

        // Final Result
        return data;

    }catch(e) {
        console.log(e);
        return res.status(400).json({status: "error", message: "Internal server error"});
    }
}





export const CategoryListService = async (req) => {
    try {
        // Category Data
        const data = await  CategoryModel.find();

        // Checking Found or Not
        if(!data || data.length === 0) {
            return null;
        }

        // Final Result
        return data;

    }catch(e) {
        console.log(e);
        return res.status(400).json({status: "error", message: "Internal server error"});
    }
}





export const SliderListService = async (req) => {
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
        return res.status(400).json({status: "error", message: "Internal server error"});
    }
}





export const ListByBrandService = async (req) => {

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
 

 