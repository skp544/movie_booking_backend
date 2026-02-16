const movieService = require("../services/movie.service");
const {
  successResponseBody,
  errorResponseBody,
} = require("../utils/responseBody");

exports.createMovie = async (req, res) => {
  try {
    const response = await movieService.createMovie(req.body);

    successResponseBody.data = response;
    successResponseBody.message = "Successfully created movie.";

    return res.status(201).json(successResponseBody);
  } catch (error) {
    if (error.err) {
      errorResponseBody.err = error.err;
      errorResponseBody.message = "Validation failed for the request.";
      return res.status(error.code).json(errorResponseBody);
    }
    return res.status(500).json(errorResponseBody);
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const response = await movieService.deleteMovie(req.params.id);

    successResponseBody.data = response;
    successResponseBody.message = "Successfully deleted movie.";

    return res.status(200).json(successResponseBody);
  } catch (error) {
    if (error.err) {
      errorResponseBody.err = error.err;
      return res.status(error.code).json(errorResponseBody);
    }
    return res.status(500).json(errorResponseBody);
  }
};

exports.getMovie = async (req, res) => {
  try {
    const response = await movieService.getMovieById(req.params.id);

    successResponseBody.data = response;

    return res.status(200).json(successResponseBody);
  } catch (error) {
    if (error.err) {
      errorResponseBody.err = error.err;
      return res.status(error.code).json(errorResponseBody);
    }
    return res.status(500).json(errorResponseBody);
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const movie = await movieService.updateMovie(req.params.id, req.body);

    successResponseBody.data = movie;
    successResponseBody.message = "Successfully updated movie.";

    return res.status(200).json(successResponseBody);
  } catch (error) {
    errorResponseBody.err = error.err;
    return res.status(error.code).json(errorResponseBody);
  }
};
