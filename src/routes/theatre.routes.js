const { Router } = require("express");
const { create, destroy } = require("../controllers/theatre.controller");
const {
  validateTheatreCreaterRequest,
} = require("../middlewares/theatre.middlewares");

const theatreRouter = Router();

theatreRouter.post("/", validateTheatreCreaterRequest, create);

theatreRouter.delete("/:id", destroy);

module.exports = theatreRouter;
