import { NextFunction, Request, Response, Router } from "express";
import { login, register } from "./userController";

const router = Router();

router.post("/register", register);
router.post("/login", login);

export default router;
