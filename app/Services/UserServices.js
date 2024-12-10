import UserModel from "../models/UsersModel/UserModel.js";
import { EmailSend } from "../utility/EmailSender.js";
import { TokenEncode } from "../utility/TokenHelper.js";


export const UserOTPService = async (req) => {
    try {
        const email = req.params.email;
        const code = Math.floor(100000 + Math.random() * 900000);
        const EmailSub = `MERN-SHOP User Login OTP Verification`
        const EmailText = ``
        const EmailHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Login Code</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
        }
        .header {
            text-align: center;
            padding: 10px 0;
        }
        .header h1 {
            color: #4CAF50;
            font-size: 24px;
        }
        .otp {
            font-size: 24px;
            color: #4CAF50;
            font-weight: bold;
            text-align: center;
            padding: 20px 0;
        }
        .message {
            font-size: 16px;
            line-height: 1.6;
            margin: 20px 0;
            text-align: center;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #888;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to MERN-SHOP</h1>
        </div>
        <div class="message">
            <p>Use the following OTP to complete your login:</p>
        </div>
        <div class="otp">
            ${code}
        </div>
        <div class="message">
            <p>If you did not request this, please ignore this email.</p>
        </div>
        <div class="footer">
            &copy; 2024 MERN-SHOP. All rights reserved.
        </div>
    </div>
</body>
</html>
`

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
    try {
        const otp = req.params.code;
        const email = req.params.email;

        const data = await UserModel.aggregate([
            {$match:{email: email, otp: otp}}
        ])


        if(!data || data.length === 0) {
            return {status: "fail", message: "Invalid OTP"}
        }

        const encoded = await TokenEncode(data['email', data['_id']]);

        if(encoded === null) {
            return {status: 'fail', message:'Token info invalid'}
        }
        

        return {status: "Success", message: "Login success", Token: encoded};


    }catch(e) {
        console.log(e.toString());
        return {status: "error", message: "Internal server error..!"};
    }
}


export const UserLogoutService  = async (req) => {
    
}


export const CreateProfileService  = async (req) => {
    
}


export const UpdateProfileService  = async (req) => {
    
}


export const ReadProfileService  = async (req) => {
    
}
 