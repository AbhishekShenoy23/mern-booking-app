import { check } from "express-validator";

export const validateUserRegistration = [
  check("fname").notEmpty().withMessage("First Name is required"),
  check("lname").notEmpty().withMessage("Last Namer is required"),
  check("email").isEmail().withMessage("Email is not valid"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  // Add more validation rules as needed
];

export const validUserLogin = [
  check("email").notEmpty().withMessage("Email is required"),
  check("password")
    .notEmpty()
    .withMessage("Password must be at least 6 characters long"),
];
