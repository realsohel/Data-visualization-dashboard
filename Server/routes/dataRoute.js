import express from "express";
import { getData, getSpecificData } from "../controllers/dataController.js";

const router = express.Router();

router.get("/getdata",getData)
router.get("/getspecificdata",getSpecificData)

export default router;