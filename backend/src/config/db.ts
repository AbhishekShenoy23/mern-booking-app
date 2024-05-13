import mongoose from "mongoose";
import { _config } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to MongoDb");
    });

    mongoose.connection.on("reconnected", () => {
      console.log("Reconnected to MongoDb");
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Disconnected from MongoDb");
    });

    mongoose.connection.on("error", (error) => {
      console.log("Error in connection", error);
    });

    await mongoose.connect(_config.mongo_uri as string);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Failed to connect to MongoDb", error);
    process.exit(1);
  }
};

export default connectDB;
