import mongoose from "mongoose";

const WinDrawSchema = new mongoose.Schema(
  {
    userDetails: {
      type: Object,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("WinDraw", WinDrawSchema);
export default User;