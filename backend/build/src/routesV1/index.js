"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const plans_routes_1 = __importDefault(require("./plans.routes"));
const router = express_1.default.Router();
// public routes
router.use("/plans", plans_routes_1.default);
// protected routes
exports.default = router;
//# sourceMappingURL=index.js.map