const { Router } = require("express");
const { createMovie } = require("../controllers/movie.controller");

const movieRouter = Router();

movieRouter.post("/", createMovie);

module.exports = movieRouter;
