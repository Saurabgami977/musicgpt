"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const express_validator_1 = require("express-validator");
const ApiError_1 = require("../core/ApiError");
const validateRequest = (validations // array of express-validator validation chains
) => async (req, res, next) => {
    // Run all validations
    await Promise.all(validations.map((validation) => validation.run(req)));
    // Collect the validation result
    const errors = (0, express_validator_1.validationResult)(req);
    // If no errors, proceed to next middleware/controller
    if (errors.isEmpty()) {
        return next();
    }
    // If there are validation errors, extract them and return a response
    const extractedErrors = errors.array().map((err) => err.msg);
    const message = extractedErrors.join(", ");
    // Pass error to error handler
    return next(new ApiError_1.BadRequestError(message));
};
exports.validateRequest = validateRequest;
//# sourceMappingURL=validator.js.map