import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: false,
      minlength: 3,
    },
    isAnonymous: {
      type: Boolean,
      required: true,
      default: true,
      index: true,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
    isExpired: {
      type: Boolean,
      default: false,
      required: true,
      index: true,
    },
    isMatched: {
      type: Boolean,
      default: false,
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
