import express from "express";
import * as ProductControllers from '../app/controllers/ProductControllers.js';

// CREATEED ROUTER INSTANCE
const router = express.Router();


// Product
router.get('/ProductBrandList', ProductControllers.ProductBrandList);
router.get('/ProductCategoryList', ProductControllers.ProductCategoryList);
router.get('/ProductSliderList', ProductControllers.ProductSliderList);
router.get('/ProductListByBrand/:brandId', ProductControllers.ProductListByBrand);
router.get('/ProductListByCategory/:categoryId', ProductControllers.ProductListByCategory);
router.get('/ProductListBySimilar/:keyword', ProductControllers.ProductListBySimilar);
router.get('/ProductListByKewword/:Keyword', ProductControllers.ProductListByKewword);
router.get('/ProductListByRemark/:Remark', ProductControllers.ProductListByRemark);
router.get('/ProductDetails/:ProductId', ProductControllers.ProductDetails);
router.get('/ProductReviewsList/:ProductId', ProductControllers.ProductReviewsList);



// ROUTER EXPORTING
export default router;