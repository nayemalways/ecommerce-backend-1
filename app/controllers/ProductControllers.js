import { BrandListService, CategoryListService, SliderListService, ListByBrandService, ListByCategoryService, ListBySimilarService, ListByKewwordService, ListByRemarkService, DetailsService, ReviewsListService } from "../Services/ProductServices.js"


export const ProductBrandList = async (req, res) => {
    const result = await BrandListService();
    res.json(result);
}



export const ProductCategoryList = async (req, res) => {
    const result = await CategoryListService();
    res.json(result);
}



export const ProductSliderList = async (req, res) => {
    const result = await SliderListService();
    res.json(result)
}



export const ProductListByBrand = async (req, res) => {
    const result = await ListByBrandService(req);

    if(result === null) {
        res.status(404).json({status: "fail", message: "No data found"});
    }

    res.json({status: "Success", data: result});
}



export const ProductListByCategory = async (req, res) => {
    
}



export const ProductListBySimilar = async (req, res) => {
    
}


export const ProductListByKewword = async (req, res) => {
    
}



export const ProductListByRemark = async (req, res) => {
    
}



export const ProductDetails = async (req, res) => {
    
}



export const ProductReviewsList= async (req, res) => {
    
}



 