import mongoose from "mongoose";

const DataSchema = mongoose.Schema(
    {
      img1: {type: String, required: true},
      img2: {type: String, required: true},
      img3: {type: String, required: true},
      img4: {type: String, required: true},
      img5: {type: String},
      img6: {type: String},
      img7: {type: String},
      img8: {type: String},

      des: {type: String},
      color: {type: String},
      size: {type: String},

      productID: {type: mongoose.Schema.Types.ObjectId, required: true}
    },
    {timestamps: true, versionKey: false}
)

const ProductDetails = mongoose.model('ProductDetails', DataSchema);


// Export Data Model
export default ProductDetails;