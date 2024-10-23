import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullname: {
    type: String,
    require: true,
    trim: true,
    index: true,
  },
  avatar: {
    type: String, // cloudinary url
    require: true,
  },
  coverImage: {
    type: String, // cloudinary url
  },
  watchHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
  password: {
    type: String, // cloudinary url
    require: [true, "password is required"],
  },
  refrencetoken: {
    type: String,
  },
});

export const User = mongoose.model("User", userSchema);
