const { Router } = require("express");
const { create } = require("../controllers/theatre.controller");

const theatreRouter = Router();

theatreRouter.post("/", create);

module.exports = theatreRouter;
