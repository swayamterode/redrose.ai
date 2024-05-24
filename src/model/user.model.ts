import mongoose, { Document, Schema } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  isVerified: boolean;
  verifyCodeExpiry: Date;
  isAcceptingMessage: boolean;
  message: Message[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
    unique: true,
    minlength: [6, "Username must be at least 6 characters"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[a-z]+@[a-z]+(?:\.gmail\.com|\.yahoo\.com)$/,
      "Invalid email: only gmail and yahoo are allowed!",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
  },
  verifyCode: {
    type: String,
    required: [true, "Verify code is required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Expiry date is required"],
  },
  isAcceptingMessage: {
    type: Boolean,
    default: true,
  },
  message: [MessageSchema],
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
