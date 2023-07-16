import mongoose, { Schema, models } from "mongoose";

const userProfileSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UserProfile =
  models.UserProfile || mongoose.model("UserProfile", userProfileSchema);
export default UserProfile;
