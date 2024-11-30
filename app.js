// DEPENDENCIES
import express from 'express';
import hpp from 'hpp';
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';
import xss from 'xss';
import mongoSanitize from 'mongo-sanitize'
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import reateLimit from 'express-rate-limit';
import router from './routes/api.js'
import {DATABASE_URL, DATABASE_PASSWORD, DATABASE_USERNAME, REQUEST_LIMIT_NUMBER, REQUEST_LIMIT_TIME, WEB_CACHE, URL_ENCODED,MAX_JSON_SIZE, PORT} from './app/config/config.js'

// APP
const app = express();

// APPLICATION GLOBAL MIDDLEWARES
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(cookieParser());
app.use(express.json({limit: MAX_JSON_SIZE}));
app.use(express.urlencoded({extended: URL_ENCODED}));
app.use(fileUpload());

// RATE LIMT
const limitter = reateLimit({windowMs: REQUEST_LIMIT_TIME, max: REQUEST_LIMIT_NUMBER});
app.use(limitter);

// WEB CACHE
app.set('etag', WEB_CACHE);

// DATABASE CONNECTION
const options = {
    user: DATABASE_USERNAME,
    pass: DATABASE_PASSWORD,
    autoIndex: true,
    serverSelectionTimeoutMS: 30000
}

mongoose.connect(DATABASE_URL, options)
    .then(() => console.log("Database connected"))
    .catch((e) => console.log(e));



//  SET APPLICATION STOARGE
app.use(express.static('storage'));

// API ROUTES
app.use('/api', router);



// *** RUN APPLICATIONSS
app.listen(PORT, () => console.log(`App running on https://localhost:${PORT}`))