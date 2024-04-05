const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const UsersRoute = require("./routes/users");
const app = express();
const dbURI =
  "mongodb+srv://zeinshaban25:kphobia963@zein-courses.nfshjuh.mongodb.net/zein-courses?retryWrites=true&w=majority&appName=zein-courses";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get("/", (req, res) => {
  res.redirect("/users");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
app.use("/users", UsersRoute);

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
