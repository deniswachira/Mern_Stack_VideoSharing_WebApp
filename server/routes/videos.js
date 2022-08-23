import express from "express";
import { addView, createVideo, deleteVideo, getByTag, getVideo, random, search, sub, trends, updateVideo } from "../controllers/video.js";
import {verifyToken} from "../verifyToken.js";
const router = express.Router();

//create a video
router.post("/", verifyToken, createVideo);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", verifyToken, deleteVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id",addView);
router.get("/trend", trends);
router.get("/random", random);
router.get("/sub",verifyToken, sub);
router.get("/tags", getByTag);
router.get("/search", search);



export default router; 