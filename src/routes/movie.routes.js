const { Router } = require("express");
const {
  createMovie,
  deleteMovie,
  getMovie,
} = require("../controllers/movie.controller");

const movieRouter = Router();

movieRouter.post("/", createMovie);

movieRouter.delete("/:id", deleteMovie);

movieRouter.get("/:id", getMovie);

module.exports = movieRouter;
