const express = require("express");
const path = require("path");
const createError = require("http-errors");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));


app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", {message: err.message});
});


app.listen(8080, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  console.log(`Yupp! Server is running on port 8080`);
});