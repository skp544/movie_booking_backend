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

exports.getAllTheatres = async () => {
  try {
    const response = await TheatreModel.find({});
    return response;
  } catch (error) {
    throw error;
  }
};
