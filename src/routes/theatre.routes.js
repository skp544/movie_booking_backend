const { Router } = require("express");
const { create } = require("../controllers/theatre.controller");
const {
  validateTheatreCreaterRequest,
} = require("../middlewares/theatre.middlewares");

const theatreRouter = Router();

theatreRouter.post("/", validateTheatreCreaterRequest, create);

module.exports = theatreRouter;
