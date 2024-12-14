import dotenv from 'dotenv';
dotenv.config();


// DATABASE INFO
export const DATABASE_URL = process.env.DATABASE_URL;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME;
//  JWT CONFIG
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRATIONS_TIME = Number(process.env.JWT_EXPIRATION_TIME);

// EMAIL CONFIG
export const EMAIL_HOST = process.env.EMAIL_HOST;
export const EMAIL_PORT = process.env.EMAIL_PORT;
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
export const EMAIL_USER = process.env.EMAIL_USER;
export const EMAIL_SECURITY = false;
 

// RATE LIMITING
export const REQUEST_LIMIT_TIME = process.env.REQUEST_LIMIT_TIME;
export const REQUEST_LIMIT_NUMBER = process.env.REQUEST_LIMIT_NUMBER;

// WEB CACHE
export const WEB_CACHE = false;

// URL ENCODE
export const URL_ENCODED = process.env.URL_ENCODED;

// MAXIMUM JSON SIZE
export const MAX_JSON_SIZE = process.env.MAX_JSON_SIZE;


// PORT
export const PORT = process.env.PORT || 3000;