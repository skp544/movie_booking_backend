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
