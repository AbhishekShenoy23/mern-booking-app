import express from "express";
import cors from "cors";
import createHttpError from "http-errors";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import userRouter from "./user/userRoutes";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/healthCheck", (req, res, next) => {
  try {
    return res.status(200).send({
      message: "Server is up and running",
    });
  } catch (error) {
    return next(createHttpError(500, "Health Check Failed"));
  }
});

app.use("/api/v1/users", userRouter);

app.use(globalErrorHandler);

export default app;
