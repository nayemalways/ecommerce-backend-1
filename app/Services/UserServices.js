import UserModel from "../models/UsersModel/UserModel.js";
import { EmailSend } from "../utility/EmailSender.js";


export const UserOTPService = async (req) => {
    try {
        const email = req.params.email;
        const code = Math.floor(100000 + Math.random() * 900000);
        const EmailSub = `MERN-SHOP User Login OTP Verification`
        const EmailText = ``
        const EmailHTML = `<h1>Your OTP code is: ${code}</h1>`

        const OTPSender = await EmailSend(email, EmailSub, EmailText, EmailHTML);

        if(OTPSender) {
            await UserModel.updateOne({email: email}, {$set: {otp: code}}, {upsert: true});

            return {status: "Success", message: "A 6 digit OTP has been sent successfully"};
        }else {
            return {status: "fail", message: "OTP is not been sent"};
        }

    }catch(e) {
        console.log(e);
        return {status: "Error", message: "Internal server error..!"};
    }
}


export const VerifyOTPService  = async (req) => {
    
}


export const UserLogoutService  = async (req) => {
    
}


export const CreateProfileService  = async (req) => {
    
}


export const UpdateProfileService  = async (req) => {
    
}


export const ReadProfileService  = async (req) => {
    
}
 