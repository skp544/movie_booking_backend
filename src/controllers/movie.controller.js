const movieService = require("../services/movie.service");
const {
  successResponseBody,
  errorResponseBody,
} = require("../utils/responseBody");

exports.createMovie = async (req, res) => {
  try {
    const movie = await movieService.createMovie(req.body);

    successResponseBody.data = movie;
    successResponseBody.message = "Successfully created movie.";

    return res.status(201).json(successResponseBody);
  } catch (err) {
    return res.status(500).json(errorResponseBody);
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
