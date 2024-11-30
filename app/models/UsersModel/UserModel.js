import mongoose from "mongoose";

const DataSchema = mongoose.Schema(
    {
        email: {type: String, required: true, unique: true, lowercase: true},
        otp: {type: String, default: 0}
    },
    {timestamps: true, versionKey: false}
)

const UserModel = mongoose.model('users', DataSchema);


// Export Data Model
export default UserModel;