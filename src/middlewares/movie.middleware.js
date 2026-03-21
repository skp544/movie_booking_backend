const badRequestResponse = {
  success: false,
  err: "",
  data: {},
  message: "Validation failed for the request.",
};

exports.validateMovieCreateRequest = async (req, res, next) => {
  if (!req.body.name) {
    badRequestResponse.err = "Movie Name is not present in the request.";
    return res.status(400).json(badRequestResponse);
  }

  if (!req.body.description) {
    badRequestResponse.err = "Movie Description is not present in the request";
    return res.status(400).json(badRequestResponse);
  }

  if (
    !req.body.casts ||
    !(req.body.casts instanceof Array) ||
    req.body.casts.length <= 0
  ) {
    badRequestResponse.err =
      "The casts of the movie is not present in the request";
    return res.status(400).json(badRequestResponse);
  }

  if (!req.body.trailerUrl) {
    badRequestResponse.err =
      "The trailer url of the movie is not present in the request";
    return res.status(400).json(badRequestResponse);
  }

  if (!req.body.releasedDate) {
    badRequestResponse.err =
      "The released date of the movie is not present in the request";
    return res.status(400).json(badRequestResponse);
  }

  if (!req.body.director) {
    badRequestResponse.err =
      "The director of the movie is not present in the request";
    return res.status(400).json(badRequestResponse);
  }
  next();
};
