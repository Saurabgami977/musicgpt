"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routesV1/index"));
const ApiError_1 = require("./core/ApiError");
const ApiResponse_1 = require("./core/ApiResponse");
const http_1 = __importDefault(require("http"));
const whitelist = ["http://localhost:3000", "http://localhost:3001"];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.static(__dirname));
app.use(express_1.default.json({ limit: "50mb" }));
app.use("/v1/uploads", express_1.default.static("./uploads"));
app.use("/v1", index_1.default);
app.use((err, req, res, next) => {
    if (err instanceof ApiError_1.ApiError) {
        ApiError_1.ApiError.handle(err, res);
    }
    else {
        new ApiResponse_1.BadRequestResponse(err.message).send(res);
    }
});
//
app.get("*", function (req, res) {
    new ApiResponse_1.NotFoundResponse("Endpoint doesn't exist").send(res);
});
exports.default = server;
//# sourceMappingURL=app.js.map