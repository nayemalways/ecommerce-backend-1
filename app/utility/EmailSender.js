import nodemailer from "nodemailer";
import { EMAIL_HOST, EMAIL_PASSWORD, EMAIL_PORT, EMAIL_SECURITY, EMAIL_USER } from "../config/config.js";


export const EmailSend = async (EmailTo, EmailSubject, EmailText,  EmailHTMLBody) => {

    const transporter = nodemailer.createTransport({
        host: EMAIL_HOST,
        port: EMAIL_PORT,
        secure: EMAIL_SECURITY,
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    });


    const MailOptions = {
        from: EMAIL_USER,
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText,
        html: EmailHTMLBody
    }

    // SEND EMAIL
    try{
        await transporter.sendMail(MailOptions);
        return true;
    }catch(error){
        return false;
    }
};
