import { Request, Response, NextFunction } from "express";

import { HttpError } from "http-errors";
import { _config } from "../config/config";

export const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = err.message || "Internal Server Error";
  const statusCode = err.statusCode || 500;
  const errorStack = _config.node_env === "development" ? err.stack : "";

  res.status(statusCode).json({ message: message, stack: errorStack });
};
