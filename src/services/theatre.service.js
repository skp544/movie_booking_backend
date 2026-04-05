const TheatreModel = require("../models/theatre.model");

exports.createTheatre = async (data) => {
  try {
    const response = await TheatreModel.create(data);
    return response;
  } catch (error) {
    if (error.name === "ValidationError") {
      let err = {};
      Object.keys(error.errors).forEach((key) => {
        err[key] = error.errors[key].message;
      });

      throw { err, code: 422 };
    }
    throw err;
  }
};

exports.deleteTheatre = async (id) => {
  try {
    const response = await TheatreModel.findByIdAndDelete(id);

    if (!response) {
      throw { err: "No theatre found for corresponding id.", code: 404 };
    }

    return response;
  } catch (error) {
    throw error;
  }
};

exports.getTheatre = async (id) => {
  try {
    const response = await TheatreModel.findById(id);

    if (!response) {
      throw { err: "No theatre found for corresponding id.", code: 404 };
    }

    return response;
  } catch (error) {
    throw error;
  }
};

exports.getAllTheatres = async (data) => {
  try {
    let query = {};

    if (data?.city) query.city = data.city;
    if (data?.pincode) query.pincode = data.pincode;
    if (data?.name) query.name = { $regex: data.name, $options: "i" };

    let limit = data?.limit ? parseInt(data.limit) : 10;
    let page = data?.page ? parseInt(data.page) : 1;
    let skip = (page - 1) * limit;

    const theatres = await TheatreModel.find(query)
      .limit(limit)
      .skip(skip)
      .populate("movies");

    const total = await TheatreModel.countDocuments(query);

    return {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      data: theatres,
    };
  } catch (error) {
    throw error;
  }
};

exports.updateMoviesInTheatres = async (theatreId, moviesIds, insert) => {
  try {
    const theatre = await TheatreModel.findById(theatreId);
    if (!theatre) {
      throw { err: "No theatre found for corresponding id.", code: 404 };
    }
    if (insert) {
      moviesIds.forEach((movieId) => {
        theatre.movies.push(movieId);
      });
    } else {
      // remove
      let savedMovieIds = theatre.movies;

      moviesIds.forEach((movieId) => {
        savedMovieIds = savedMovieIds.filter(
          (smi) => smi.toString() !== movieId.toString(),
        );
      });

      theatre.movies = savedMovieIds;
    }

    await theatre.save();
    return theatre.populate("movies");
  } catch (error) {
    throw error;
  }
};
