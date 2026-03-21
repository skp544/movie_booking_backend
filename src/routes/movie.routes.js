const { Router } = require("express");
const {
  createMovie,
  deleteMovie,
  getMovie,
  updateMovie,
  getMovies,
} = require("../controllers/movie.controller");
const {
  validateMovieCreateRequest,
} = require("../middlewares/movie.middleware");

const movieRouter = Router();

movieRouter.post("/", validateMovieCreateRequest, createMovie);

movieRouter.delete("/:id", deleteMovie);

movieRouter.get("/:id", getMovie);

movieRouter.put("/:id", updateMovie);

movieRouter.get("/", getMovies);

module.exports = movieRouter;
