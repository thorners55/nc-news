const express = require("express");
const app = express();

const { apiRouter } = require("./routers/api-router.js");
const {
  handler404,
  handleInternalErrors,
  handlePSQLErrors,
  handler405,
} = require("./controllers/errors-controller.js");

app.use(express.json());
app.use("/api", apiRouter);

app.route("/*").all(handler405);
// app.use(handler400);
// app.use(handler405);
app.use(handlePSQLErrors);
app.use(handleInternalErrors);

module.exports = app;
