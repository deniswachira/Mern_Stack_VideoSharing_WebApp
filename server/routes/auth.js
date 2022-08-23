import express from "express";
import { signup, signin } from "../controllers/auth.js";

const router = express.Router();

//Create a User
router.post("/signup", signup);

//Sign In
router.post("/signin", signin);

//Google Sign In
router.post("/google-signin",);


export default router;  