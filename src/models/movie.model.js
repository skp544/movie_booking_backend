const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    casts: {
      type: [String],
      required: true,
    },
    trailerUrl: {
      type: String,
    },
    language: {
      type: String,
      required: true,
      default: "English",
    },
    releasedDate: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    releasedStatus: {
      type: String,
      required: true,
      default: "RELEASED",
    },
  },
  { timestamps: true },
);

const MovieModel = model("movie", movieSchema);

module.exports = MovieModel;
