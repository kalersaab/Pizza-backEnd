import mongoose, { Document, Schema, Model } from "mongoose";

export interface IUserDocument extends Document {
  username: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  firstName: string;
  lastName: string;
  avatar_url: string;
  role: "admin" | "user";
  gender: "male" | "female" | "others";
  is_admin: boolean;
  Dob: string;
  createdAt: Date;
  updatedAt: Date;
}
const user = new mongoose.Schema<IUserDocument>(
  {
    username: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    Dob: { type: String, required: true },
    role: {
      type: String,
      required: true,
      default: "user",
      enum: ["admin", "user"],
    },
    avatar_url: { type: String, required: false },
    is_admin: { type: Boolean, default: false },
    gender: {
      type: String,
      valueType: "String",
      enum: ["male", "female", "others"],
    },
  },
  {
    timestamps: true,
  }
);
// Define user class
export const UserModel = mongoose.model<IUserDocument>("User", user);
