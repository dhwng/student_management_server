const express = require("express");
const {classRouter} = require("./classRoute");


const rootRouter = express.Router();
rootRouter.use("/classes",classRouter);
module.exports = rootRouter;
