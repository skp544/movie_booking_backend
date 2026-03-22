const theatreService = require("../services/theatre.service");
const {
  successResponseBody,
  errorResponseBody,
} = require("../utils/responseBody");

exports.create = async (req, res) => {
  try {
    const response = await theatreService.createTheatre(req.body);

    successResponseBody.data = response;
    successResponseBody.message = "Successfully created theatre.";

    return res.status(201).json(successResponseBody);
  } catch (error) {
    if (error.err) {
      errorResponseBody.err = error.err;
      return res.status(error.code).json(errorResponseBody);
    }
    errorResponseBody.err = error;
    return res.status(500).json(errorResponseBody);
  }
};

exports.destroy = async (req, res) => {
  try {
    const response = await theatreService.deleteTheatre(req.params.id);

    successResponseBody.data = response;
    successResponseBody.message = "Successfully deleted theatre.";

    return res.status(200).json(successResponseBody);
  } catch (error) {
    if (error.err) {
      errorResponseBody.err = error.err;
      return res.status(error.code).json(errorResponseBody);
    }
    errorResponseBody.err = error;
    return res.status(500).json(errorResponseBody);
  }
};

exports.getByID = async (req, res) => {
  try {
    const response = await theatreService.getTheatre(req.params.id);

    successResponseBody.data = response;

    return res.status(200).json(successResponseBody);
  } catch (error) {
    if (error.err) {
      errorResponseBody.err = error.err;
      return res.status(error.code).json(errorResponseBody);
    }
    errorResponseBody.err = error;
    return res.status(500).json(errorResponseBody);
  }
};
