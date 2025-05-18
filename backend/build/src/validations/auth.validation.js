"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginCredentials = void 0;
//import express validator
const express_validator_1 = require("express-validator");
// validate login credentials
exports.loginCredentials = [
    (0, express_validator_1.body)("email")
        .isEmail()
        .withMessage("A valid email is required")
        .normalizeEmail(), // optional: normalizes the email input by removing dots or capitalization
    (0, express_validator_1.body)("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long")
        .trim() // optional: trims whitespace from password
        .not()
        .isEmpty()
        .withMessage("Password is required"),
];
// validate register credentials
const registerCredentials = [
    (0, express_validator_1.body)("email").isEmail().withMessage("Email is required"),
    (0, express_validator_1.body)("password").isLength({ min: 6 }).withMessage("Password is required"),
    (0, express_validator_1.body)("name").isLength({ min: 3 }).withMessage("Name is required"),
    (0, express_validator_1.body)("type")
        .isIn(["user", "admin", "super admin", "owner", "staff"])
        .withMessage("Role is required"),
];
// validate forgot password
const forgotPassword = [
    (0, express_validator_1.body)("email").isEmail().withMessage("Email is required"),
];
// validate reset password
const resetPassword = [
    (0, express_validator_1.body)("email").isEmail().withMessage("Email is required"),
    (0, express_validator_1.body)("password").isLength({ min: 6 }).withMessage("Password is required"),
    (0, express_validator_1.body)("confirmPassword")
        .isLength({ min: 6 })
        .withMessage("Confirm password is required"),
    (0, express_validator_1.body)("otp").isLength({ min: 6 }).withMessage("OTP is required"),
];
// validate update password
const updatePassword = [
    (0, express_validator_1.body)("oldPassword")
        .isLength({ min: 6 })
        .withMessage("Old password is required"),
    (0, express_validator_1.body)("newPassword")
        .isLength({ min: 6 })
        .withMessage("New password is required"),
    (0, express_validator_1.body)("confirmPassword")
        .isLength({ min: 6 })
        .withMessage("Confirm password is required"),
];
exports.default = {
    loginCredentials: exports.loginCredentials,
    registerCredentials,
    forgotPassword,
    resetPassword,
    updatePassword,
};
//# sourceMappingURL=auth.validation.js.map