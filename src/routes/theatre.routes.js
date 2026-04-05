const { Router } = require("express");
const {
  create,
  destroy,
  getByID,
  getAll,
  updateMovies,
} = require("../controllers/theatre.controller");
const {
  validateTheatreCreaterRequest,
  validateUpdateMoviesRequest,
} = require("../middlewares/theatre.middlewares");

const theatreRouter = Router();

theatreRouter.post("/", validateTheatreCreaterRequest, create);

theatreRouter.delete("/:id", destroy);

theatreRouter.get("/:id", getByID);

theatreRouter.get("/", getAll);

theatreRouter.patch("/:id/movies", validateUpdateMoviesRequest, updateMovies);

module.exports = theatreRouter;
