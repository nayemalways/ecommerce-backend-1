import { json } from "express";
import {UserOTPService, VerifyOTPService, UserLogoutService, CreateProfileService, UpdateProfileService, ReadProfileService} from "../Services/UserServices.js";

export const UserOTP = async (req, res) => {
    const result = await UserOTPService(req);
    res.json(result);
}


 export const OTPVerifyLogin = async (req, res) => {
    const result = await VerifyOTPService(req);

    if(result['status'] === 'Success') {

        // Set cookie option
        const cookieOptions = {expires: new Date(Date.now() + 24 * 60 * 60 * 1000), httpOnly: false};

        // Set cookie
        res.cookie("token", result['Token'], cookieOptions);

        res.json(result)
    }else {

        res.json(result);
    }
} 


export const UserLogout = async (req, res) => {
    
}


export const CreateProfile = async (req, res) => {
    
}


export const UpdateProfile = async (req, res) => {
    
}


export const ReadProfile = async (req, res) => {
    
}
 