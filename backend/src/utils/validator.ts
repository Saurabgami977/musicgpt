import { Request, Response, NextFunction } from "express";
import { validationResult, ValidationChain } from "express-validator";
import { BadRequestError } from "../core/ApiError";

export const validateRequest =
  (
    validations: ValidationChain[] // array of express-validator validation chains
  ) =>
  async (req: Request, res: Response, next: NextFunction) => {
    // Run all validations
    await Promise.all(validations.map((validation) => validation.run(req)));

    // Collect the validation result
    const errors = validationResult(req);

    // If no errors, proceed to next middleware/controller
    if (errors.isEmpty()) {
      return next();
    }

    // If there are validation errors, extract them and return a response
    const extractedErrors = errors.array().map((err) => err.msg);
    const message = extractedErrors.join(", ");

    // Pass error to error handler
    return next(new BadRequestError(message));
  };
