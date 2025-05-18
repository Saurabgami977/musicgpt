"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const subscriptions_controller_1 = require("../controller/Attendance/subscriptions.controller");
const router = express_1.default.Router();
router.route("/").get(subscriptions_controller_1.getSubscriptions);
exports.default = router;
//# sourceMappingURL=plans.routes.js.map