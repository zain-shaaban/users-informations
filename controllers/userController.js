const User = require("../models/user");

const getAllUsers = (req, res) => {
  User.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { users: result, title: "All Users" });
    })
    .catch((err) => {
      console.log(err);
      res.render("404", { title: "Not Found" });
    });
};
const UserDetails = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((result) => {
      res.render("details", { user: result, title: "User Details" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const CreateGet = (req, res) => {
  res.render("create", { title: "Create a new user" });
};

const createPost = (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then((result) => {
      res.redirect("/users");
    })
    .catch((err) => {
      console.log(err);
    });
};

const DeleteUser = (req, res) => {
  const id = req.params.id;

  User.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/users" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAllUsers,
  UserDetails,
  CreateGet,
  createPost,
  DeleteUser,
};
