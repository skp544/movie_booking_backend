const { Router } = require("express");
const {
  createMovie,
  deleteMovie,
  getMovie,
  updateMovie,
} = require("../controllers/movie.controller");

const movieRouter = Router();

movieRouter.post("/", createMovie);

movieRouter.delete("/:id", deleteMovie);

movieRouter.get("/:id", getMovie);

movieRouter.put("/:id", updateMovie);

module.exports = movieRouter;
