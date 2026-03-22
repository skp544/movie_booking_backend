const { Router } = require("express");
const {
  create,
  destroy,
  getByID,
  getAll,
} = require("../controllers/theatre.controller");
const {
  validateTheatreCreaterRequest,
} = require("../middlewares/theatre.middlewares");

const theatreRouter = Router();

theatreRouter.post("/", validateTheatreCreaterRequest, create);

theatreRouter.delete("/:id", destroy);

theatreRouter.get("/:id", getByID);

theatreRouter.get("/", getAll);

module.exports = theatreRouter;
