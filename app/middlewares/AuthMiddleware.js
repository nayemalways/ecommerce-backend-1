import { DecodeToken } from "../utility/TokenHelper.js";

export const UserAuthentication = async (req, res, next) => {
    const token = req.headers['token']  || req.cookies['token'];

    // Token Decode
    const Decoded = DecodeToken(token);

    if(Decoded === null) {
        return res.status(401).json({status:"fail", message: "Unauthorized"});
    }else{
        const email = Decoded['email'];
        const user_id = Decoded['user_id'];

        req.headers.email = email;
        req.headers.user_id = user_id;

        next()
    }
}