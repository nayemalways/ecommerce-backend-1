import express from "express";
import * as ProductControllers from '../app/controllers/ProductControllers.js';

// CREATEED ROUTER INSTANCE
const router = express.Router();


// Product
router.get('/ProductBrandList', ProductControllers.ProductBrandList);
router.get('/ProductCategoryList', ProductControllers.ProductCategoryList);
router.get('/ProductSliderList', ProductControllers.ProductSliderList);
router.get('/ProductListByBrand/:brandId', ProductControllers.ProductListByBrand);
router.get('/ProductListByCategory/:categoryID', ProductControllers.ProductListByCategory);
router.get('/ProductListByRemark/:Remark', ProductControllers.ProductListByRemark);
router.get('/ProductListBySimilar/:categoryID', ProductControllers.ProductListBySimilar);
router.get('/ProductDetails/:ProductID', ProductControllers.ProductDetails);

router.get('/ProductListByKeyword/:Keyword', ProductControllers.ProductListByKeyword);
router.get('/ProductReviewsList/:ProductId', ProductControllers.ProductReviewsList);



// ROUTER EXPORTING
export default router;