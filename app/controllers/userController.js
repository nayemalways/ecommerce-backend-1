import {UserOTPService, VerifyOTPService, UserLogoutService, CreateProfileService, UpdateProfileService, ReadProfileService} from "../Services/UserServices.js";

export const UserOTP = async (req, res) => {
    const result = await UserOTPService(req);
    res.json(result);
}


export const VerifyOTP = async (req, res) => {
    
}


export const UserLogout = async (req, res) => {
    
}


export const CreateProfile = async (req, res) => {
    
}


export const UpdateProfile = async (req, res) => {
    
}


export const ReadProfile = async (req, res) => {
    
}
 