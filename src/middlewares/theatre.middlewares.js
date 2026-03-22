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
