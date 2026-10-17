import mongoose from "mongoose";

const houseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    location: { type: String, required: true, index: true },
    rent: { type: Number, required: true, min: 0 },
    type: {
      type: String,
      enum: ["Apartment", "House", "Studio", "Villa"],
      default: "Apartment",
    },
    bedrooms: { type: Number, default: 1, min: 0 },
    bathrooms: { type: Number, default: 1, min: 0 },
    image: { type: String, default: "" },
    available: { type: Boolean, default: true },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("House", houseSchema);