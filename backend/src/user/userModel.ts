import { NextFunction } from "express";
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { globalErrorHandler } from "../middleware/globalErrorHandler";

type userType = {
  _id: string;
  fname: string;
  lname: string;
  password: string;
  email: string;
};

const userSchema = new Schema<userType>({
  fname: { required: true, type: String },
  lname: { required: true, type: String },
  email: { required: true, type: String, unique: true },
  password: { required: true, type: String },
});

//HASHING THE PASSWORD.
// here Arrow function cannot be used as this keyword is used and it might point the global object . Hence using commomn function

userSchema.pre("save", async function (next) {
  this.isModified("password");
  {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

export default mongoose.model("User", userSchema);
