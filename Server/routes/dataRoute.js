import express from "express";
import { getData, getSpecificData, mostRelevance } from "../controllers/dataController.js";

const router = express.Router();

router.get("/getdata",getData)
router.get("/getspecificdata",getSpecificData)
router.get("/getmostrelevantdata",mostRelevance)

export default router;