import mongoose from "mongoose";

const chatRoomSchema = new mongoose.Schema(
  {
    roomName: {
      type: String,
      required: [true, "Room name is required"],
      trim: true,
    },
    partyCode: {
      type: String,
      required: [true, "Party code is required"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      select: false,
    },
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Host is required"],
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
      index: true,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
    activeUsers: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      required: true,
    },
    userCount: {
      type: Number,
      required: true,
      min: [0, "User count cannot be negative"],
    },
    expirationDate: {
      type: Date,
      required: [true, "Expiration date is required"],
    },
  },
  { timestamps: true }
);

const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);
export default ChatRoom;
