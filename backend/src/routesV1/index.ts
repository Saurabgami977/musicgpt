import express from "express";
import plans from "./plans.routes";

const router = express.Router();

// public routes
router.use("/plans", plans);

export default router;
