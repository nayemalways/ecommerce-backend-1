import { BrandListService, CategoryListService, SliderListService, ListByBrandService, ListByCategoryService, ListBySimilarService, ListByKewwordService, ListByRemarkService, DetailsService, ReviewsListService } from "../Services/ProductServices.js"

// Group: 1 -- PRODUCT SEARCH BY BRAND, CATEGORY, SLIDER
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



// Group: 2 -- PRODUCT SEARCH BY BRAND, CATEGORY, KEYWORD, SIMILAR, REMARK
export const ProductListByBrand = async (req, res) => {
    const result = await ListByBrandService(req);
    res.json(result);
}

export const ProductListByCategory = async (req, res) => {
    const result = await ListByCategoryService(req);
    res.json(result);
}

export const ProductListByRemark = async (req, res) => {
    const result = await ListByRemarkService(req);
    res.json(result);
}

export const ProductListBySimilar = async (req, res) => {
    const result = await ListBySimilarService(req);
    res.json(result);
}

export const ProductListByKewword = async (req, res) => {
    const result = await ListByKewwordService(req);
    res.json(result);
}






export const ProductDetails = async (req, res) => {
    
}

export const ProductReviewsList= async (req, res) => {
    
}



 