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
