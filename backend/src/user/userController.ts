import { NextFunction, Request, Response } from "express";
import userModel from "./userModel";
import { globalErrorHandler } from "../middleware/globalErrorHandler";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";
import { _config } from "../config/config";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { fname, lname, email, password } = req.body;

    const isUser = await userModel.findOne({ email: email });
    console.log("isUser", isUser);
    if (isUser) {
      return next(createHttpError(400, "User already exists"));
    }

    const user = new userModel({ fname, lname, email, password });
    await user.save();
    console.log("Hello");
    //create a jsontoken for the user.

    const token = jwt.sign(
      { userId: user._id },
      _config.tokensecret as string,
      {
        expiresIn: "1d",
      }
    );

    res
      .status(201)
      .cookie("access_token", token, {
        httpOnly: true,
        secure: _config.node_env == "development" ? false : true,
        maxAge: 86400000,
      })
      .send({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "User Registration Error"));
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email: email });
    if (!user) {
      return next(createHttpError(400, "Invalid Credentials"));
    }

    const isPasswordmatch = await bcrypt.compare(password, user.password);

    if (!isPasswordmatch) {
      return next(createHttpError(400, "Invalid Credentials"));
    }

    const token = jwt.sign(
      { userId: user._id },
      _config.tokensecret as string,
      {
        expiresIn: "1d",
      }
    );

    res
      .status(200)
      .cookie("access-token", token, {
        httpOnly: true,
        secure: _config.node_env == "development" ? false : true,
        maxAge: 86400000,
      })
      .send({ message: "Login successful", userId: user._id });
  } catch (error) {
    return next(createHttpError(400, "Failed to Login"));
  }
};
