import mongoose from "mongoose";

const DataSchema = mongoose.Schema(
    {
        productID: {type: mongoose.Schema.Types.ObjectId, required: true},
        userID: {type: mongoose.Schema.Types.ObjectId, required: true},
        color: {type: String, required: true},
        price: {type: String, required: true},
        qty: {type: String, required: true},
        size: {type: String, required: true}
    },
    {timestamps: true, versionKey: false}
)

const CartModel = mongoose.model('carts', DataSchema);


// Export Data Model
export default CartModel;