import { FailureMsgResponse, SuccessResponse } from "../../core/ApiResponse";
import asyncHandler from "../../utils/asyncHandler";
import { Request, Response } from "express";

import plans from "../../../uploads/plans.json";

export const getSubscriptions = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      return new SuccessResponse("Plans fetched Successfully", plans).send(res);
    } catch (err) {
      return new FailureMsgResponse("Failed").send(res);
    }
  }
);
