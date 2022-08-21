const express = require('express');
var app = express();
cosnt usersRoutes = require("./routes/users");
const ExpressError = require("./expressError");

app.use(express.json());


app.use("/", usersRoutes);

app.use(function (req, res, next) {
  return new ExpressError("not found", 404);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

module.exports = app;
