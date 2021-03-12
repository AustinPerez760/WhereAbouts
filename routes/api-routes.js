var db = require("../models");
var passport = require("../config/passport");
const router = require("express").Router();

router.post("/api/login", passport.authenticate("local"), function (req, res) {
  res.json(req.user);
});

router.post("/api/signup", function (req, res) {
  db.User.create({
    email: req.body.email,
    password: req.body.password,
  });
});

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get("/api/user_data", function (req, res) {
  if (!req.user) {
    res.json({});
  } else {
    res.json({
      email: req.user.email,
      id: req.user.id,
    });
  }
});

module.exports = router;
