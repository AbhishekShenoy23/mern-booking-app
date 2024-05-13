import express from "express";
import cors from "cors";
import createHttpError from "http-errors";
import { globalErrorHandler } from "./middleware/globalErrorHandler";

const app = express();

app.use(express.json);
app.use(cors());

app.get("/api/healthChek", (req, res, next) => {
  try {
    res.status(200).json({
      message: "Server is up and running",
    });
  } catch (error) {
    return next(createHttpError(500, "Health Check Failed"));
  }
});

app.use(globalErrorHandler);

export default app;
