import mongoose from "mongoose";

const DataSchema = mongoose.Schema(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        img: {type: String, required: true},
    },
    {timestamps: true, versionKey: false}
)

const FeaturesModel = mongoose.model('featurs', DataSchema);


// Export Data Model
export default FeaturesModel;