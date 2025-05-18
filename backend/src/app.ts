import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import routesV1 from "./routesV1/index";
import { ApiError } from "./core/ApiError";
import { BadRequestResponse, NotFoundResponse } from "./core/ApiResponse";
import http from "http";

const whitelist = ["http://localhost:3000", "http://localhost:3001"];
const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

const app = express();
const server = http.createServer(app);

app.use(cors(corsOptions));

app.use(express.static(__dirname));
app.use(express.json({ limit: "50mb" }));

app.use("/v1", routesV1);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    ApiError.handle(err, res);
  } else {
    new BadRequestResponse(err.message).send(res);
  }
});
//

app.get("*", function (req, res) {
  new NotFoundResponse("Endpoint doesn't exist").send(res);
});

export default server;
