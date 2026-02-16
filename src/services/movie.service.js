const e = require("express");
const MovieModel = require("../models/movie.model");

exports.createMovie = async (data) => {
  try {
    const newMovie = await MovieModel.create(data);
    return newMovie;
  } catch (error) {
    // console.log(error);
    // console.log(error.name);

    if (error.name === "ValidationError") {
      let err = {};
      Object.keys(error.errors).forEach((key) => {
        err[key] = error.errors[key].message;
      });

      throw {
        err,
        code: 422,
      };
    } else {
      throw error;
    }
  }
};
exports.deleteMovie = async (id) => {
  try {
    const movie = await MovieModel.findByIdAndDelete(id);

    if (!movie) {
      throw {
        err: "No movie found for corresponding id.",
        code: 404,
        //   message: "Something went wrong, unable to fetch movie details.",
        //   data: {},
      };
    }

    return movie;
  } catch (error) {
    throw error;
  }
};

exports.getMovieById = async (id) => {
  try {
    const movie = await MovieModel.findById(id);

    if (!movie) {
      throw {
        err: "No movie found for corresponding id.",
        code: 404,
        //   message: "Something went wrong, unable to fetch movie details.",
        //   data: {},
      };
    }

    return movie;
  } catch (error) {
    throw error;
  }
};

exports.updateMovie = async (id, data) => {
  try {
    const movie = await MovieModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!movie) {
      throw {
        err: "No movie found for corresponding id.",
        code: 404,
        //   message: "Something went wrong, unable to fetch movie details.",
        //   data: {},
      };
    }

    return movie;
  } catch (error) {
    if (error.name === "ValidationError") {
      let err = {};
      Object.keys(error.errors).forEach((key) => {
        err[key] = error.errors[key].message;
      });

      throw {
        err,
        code: 422,
      };
    } else {
      throw error;
    }
  }
};
