const MovieModel = require("../models/movie.model");
const movieService = require("../services/movie.service");

const errorResponseBody = {
  err: {},
  data: {},
  message: "Something went wrong. Unable to process request.",
  success: false,
};

const successResponseBody = {
  err: {},
  data: {},
  message: "Successfully processed request.",
  success: true,
};

exports.createMovie = async (req, res) => {
  try {
    const movie = await MovieModel.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Successfully created new movie.",
      data: movie,
      error: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to create new movie.",
      data: {},
      error: err,
    });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const response = await movieService.deleteMovie(req.params.id);

    if (response.err) {
      errorResponseBody.err = response.err;
      return res.status(response.code).json(errorResponseBody);
    }

    successResponseBody.data = response;
    successResponseBody.message = "Successfully deleted movie.";

    return res.status(200).json(successResponseBody);
  } catch (error) {
    return res.status(500).json(errorResponseBody);
  }
};

exports.getMovie = async (req, res) => {
  try {
    const response = await movieService.getMovieById(req.params.id);

    if (response.err) {
      errorResponseBody.err = response.err;
      return res.status(response.code).json(errorResponseBody);
    }

    successResponseBody.data = response;

    return res.status(200).json(successResponseBody);
  } catch (error) {
    return res.status(500).json(errorResponseBody);
  }
};
