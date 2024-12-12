import  {WishListService, SaveWishListService, WishListRemoveService  } from '../Services/WishListServices.js';

export const ReadWishListProducts = async (req, res) => {
    const result = await WishListService(req);
    return res.json(result);    
}

export const SaveWishList = async (req, res) => {
    const result = await SaveWishListService(req);
    return res.json(result); 
}


export const RemoveWishList = async (req, res) => {
    const result = await WishListRemoveService(req);
    return res.json(result); 
}