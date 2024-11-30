import mongoose, { version } from "mongoose";

const DataSchema = mongoose.Schema(
    {
        categoryName: {type: String, required: true, unique:true},
        categoryImg: {type: String, required: true}
    },
    {timestamps: true, versionKey: false}
)

const categoryModel = mongoose.model('categories', DataSchema);


// Export Data Model
export default categoryModel;