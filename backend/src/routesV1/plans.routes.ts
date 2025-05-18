import express from "express";
import { getSubscriptions } from "../controller/Attendance/subscriptions.controller";

const router = express.Router();

router.route("/").get(getSubscriptions);

export default router;
