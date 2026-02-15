const e = require("express");
const MovieModel = require("../models/movie.model");

exports.createMovie = async (data) => {
  const newMovie = await MovieModel.create(data);
  return newMovie;
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
