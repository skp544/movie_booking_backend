const MovieModel = require("../models/movie.model");

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
    const movie = await MovieModel.findByIdAndDelete(req.params.id);

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found.",
        data: {},
        error: {},
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully deleted movie.",
      data: movie,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete movie.",
      data: {},
      error: err,
    });
  }
};

exports.getMovie = async (req, res) => {
  try {
    const movie = await MovieModel.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found.",
        data: {},
        error: {},
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully fetched movie.",
      data: movie,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch movie.",
      data: {},
      error: err,
    });
  }
};
