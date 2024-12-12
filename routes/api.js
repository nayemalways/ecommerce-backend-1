import express from "express";
import * as ProductControllers from '../app/controllers/ProductControllers.js';
import * as UserControllers from '../app/controllers/userController.js';
import * as WishListController from '../app/controllers/WishListControllers.js';
import { UserAuthentication } from "../app/middlewares/AuthMiddleware.js";

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



// Users 
router.get('/UserOTP/:email', UserControllers.UserOTP);
router.get('/OTPVerifyLogin/:email/:code', UserControllers.OTPVerifyLogin);
router.get('/UserLogout', UserAuthentication , UserControllers.UserLogout);
router.post('/SaveProfile', UserAuthentication , UserControllers.SaveProfile);
router.get('/ReadProfile', UserAuthentication , UserControllers.ReadProfile);




// User Wish List
router.get('/ReadWishListProducts', UserAuthentication, WishListController.ReadWishListProducts);
router.post('/SaveWishList', UserAuthentication, WishListController.SaveWishList);
router.post('/RemoveWishList', UserAuthentication, WishListController.RemoveWishList);






// ROUTER EXPORTING
export default router;





