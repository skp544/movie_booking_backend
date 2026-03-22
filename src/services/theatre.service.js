const TheatreModel = require("../models/theatre.model");

exports.createTheatre = async (data) => {
  try {
    const response = await TheatreModel.create(data);
    return response;
  } catch (err) {
    throw err;
  }
};
