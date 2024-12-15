import jwt from 'jsonwebtoken';
import { JWT_EXPIRATIONS_TIME, JWT_SECRET } from '../config/config.js';


// ENCODE TOKEN 
export const TokenEncode = (email, user_id) => {
    const KEY = JWT_SECRET;
    const EXPIRE = {expiresIn: '7D'};
    const PAYLOAD = {email: email, user_id: user_id};
    

    return jwt.sign(PAYLOAD, KEY, EXPIRE);
};


// DECODE TOKEN 
export const DecodeToken = (token) => {
    try{
        return jwt.verify(token, JWT_SECRET);
    }catch(error){
        return null;
    }
}