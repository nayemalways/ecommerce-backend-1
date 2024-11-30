import express from "express";
import * as userController from '../app/controllers/userController.js';

// CREATEED ROUTER INSTANCE
const router = express.Router();


// API ENDPOINT
router.get('/welcome', userController.welcome);



// ROUTER EXPORTING
export default router;