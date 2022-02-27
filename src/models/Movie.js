import { Schema, model } from "mongoose";

const movieSchema = new Schema(
  {
    name: {
      type: String,
    },
    releaseDate: {
      type: String,
    },
    genre: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Movie", movieSchema);
