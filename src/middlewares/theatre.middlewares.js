const { errorResponseBody } = require("../utils/responseBody");

exports.validateTheatreCreaterRequest = (req, res, next) => {
  if (!req.body.name) {
    errorResponseBody.message = "Theatre Name is not present in the request.";
    return res.status(400).json(errorResponseBody);
  }

  if (!req.body.pincode) {
    errorResponseBody.message = "Pincode is not present in the request.";
    return res.status(400).json(errorResponseBody);
  }

  if (!req.body.city) {
    errorResponseBody.message = "City is not present in the request.";
    return res.status(400).json(errorResponseBody);
  }

  next();
};

exports.validateUpdateMoviesRequest = async (req, res, next) => {
  if (req.body.insert === undefined) {
    errorResponseBody.message = "Insert parameter is missing in the request.";
    return res.status(400).json(errorResponseBody);
  }

  if (!req.body.movieIds) {
    errorResponseBody.message =
      "No movies present in the request to be updated in theatre.";
    return res.status(400).json(errorResponseBody);
  }

  if (!(req.body.movieIds instanceof Array)) {
    errorResponseBody.message =
      "Expected array of movies but found something else in the request.";
    return res.status(400).json(errorResponseBody);
  }

  if (req.body.movieIds.length <= 0) {
    errorResponseBody.message =
      "Expected array of movies but found an empty array in the request.";
    return res.status(400).json(errorResponseBody);
  }

  next();
};
