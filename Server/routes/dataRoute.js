import express from "express";
import { getData, getSectorWithIntensity, getSpecificData, mostRelevance } from "../controllers/dataController.js";

const router = express.Router();

router.get("/getdata",getSpecificData)
router.get("/getspecificdata",getSpecificData)
router.get("/getmostrelevantdata",mostRelevance)
// router.get("/getSectorWithIntensity",getSectorWithIntensity)

export default router;