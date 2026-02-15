const MovieModel = require("../models/movie.model");

exports.getMovieById = async (id) => {
  const movie = await MovieModel.findById(id);

  if (!movie) {
    return {
      err: "No movie found for corresponding id.",
      code: 404,
      //   message: "Something went wrong, unable to fetch movie details.",
      //   data: {},
    };
  }

  return movie;
};
exports.deleteMovie = async (id) => {
  const movie = await MovieModel.findByIdAndDelete(id);

  if (!movie) {
    return {
      err: "No movie found for corresponding id.",
      code: 404,
      //   message: "Something went wrong, unable to fetch movie details.",
      //   data: {},
    };
  }

  return movie;
};
