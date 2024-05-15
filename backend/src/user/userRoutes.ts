import { NextFunction, Request, Response, Router } from "express";
import { login, register } from "./userController";
import {
  validUserLogin,
  validateUserRegistration,
} from "../config/validateUser";

const router = Router();

router.post("/register", validateUserRegistration, register);
router.post("/login", validUserLogin, login);

export default router;
