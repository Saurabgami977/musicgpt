"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubscriptions = void 0;
const ApiResponse_1 = require("../../core/ApiResponse");
const asyncHandler_1 = __importDefault(require("../../utils/asyncHandler"));
const plans_json_1 = __importDefault(require("../../../uploads/plans.json"));
exports.getSubscriptions = (0, asyncHandler_1.default)(async (req, res) => {
    try {
        return new ApiResponse_1.SuccessResponse("Plans fetched Successfully", plans_json_1.default).send(res);
    }
    catch (err) {
        return new ApiResponse_1.FailureMsgResponse("Failed").send(res);
    }
});
//# sourceMappingURL=subscriptions.controller.js.map