import { RemoveProductFromCartService, SaveProductToCartService, SelectCartListProductService, UpdateProductOfCartService } from "../Services/CartListServices.js";



export const SaveProductToCart = async (req, res) => {
    const result = await SaveProductToCartService(req);
    res.json(result);
}


export const UpdateProductOfCart = async (req, res) => {
    const result = await UpdateProductOfCartService(req);
    res.json(result);
}


export const RemoveProductFromCart = async (req, res) => {
    const result = await RemoveProductFromCartService(req);
    res.json(result);
}



export const SelectCartListProduct = async (req, res) => {
    const result = await SelectCartListProductService(req);
    res.json(result);
}
