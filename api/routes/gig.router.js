import express from "express";
import { createGig, deleteGig, singleGig, getAllGigs } from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id", verifyToken, singleGig);
router.get("/", verifyToken, getAllGigs);

export default router;