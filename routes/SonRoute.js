import express from "express";
import {
  allSons,
} from "../controllers/SonController.js";

const router = express.Router();
router.get("/allsons", allSons);

export default router;
