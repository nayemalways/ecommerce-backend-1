import mongoose, { version } from "mongoose";

const DataSchema = mongoose.Schema(
    {
        brandName: {type: String, required: true, unique:true},
        brandImg: {type: String, required: true}
    },
    {timestamps: true, versionKey: false}
)

const brandModel = mongoose.model('brands', DataSchema);


// Export Data Model
export default brandModel;