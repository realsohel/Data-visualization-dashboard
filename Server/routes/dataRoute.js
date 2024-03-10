import express from "express";
import {  getSpecificData,  } from "../controllers/dataController.js";

const router = express.Router();

router.get("/getspecificdata",getSpecificData)

export default router;