const theatreService = require("../services/theatre.service");
const {
  successResponseBody,
  errorResponseBody,
} = require("../utils/responseBody");

exports.create = async (req, res) => {
  try {
    const response = await theatreService.createTheatre(req.body);

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
