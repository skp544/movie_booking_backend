const { Router } = require("express");
const {
  create,
  destroy,
  getByID,
} = require("../controllers/theatre.controller");
const {
  validateTheatreCreaterRequest,
} = require("../middlewares/theatre.middlewares");

const theatreRouter = Router();

theatreRouter.post("/", validateTheatreCreaterRequest, create);

theatreRouter.delete("/:id", destroy);

theatreRouter.get("/:id", getByID);

module.exports = theatreRouter;
