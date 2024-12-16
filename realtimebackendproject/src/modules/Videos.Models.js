import mongoose, { Schema } from "mongoose";

const videoSchrma = new Schema(
  {
    video: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Video = mongoose.model("Video", videoSchrma);
