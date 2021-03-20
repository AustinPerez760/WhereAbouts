var db = require("../models");
var passport = require("../config/passport");
const router = require("express").Router();

router.post("/api/login", passport.authenticate("local"), function (req, res) {
  res.json(req.user);
  // if (req.user) {
  //   res.json({ isAuth: true });
  // } else {
  //   res.json({ isAuth: false });
  // }
});

router.post("/api/signup", function (req, res) {
  db.User.create({
    email: req.body.email,
    password: req.body.password,
  });
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

router.get("/logout", (req, res) => {
  req.logout();
});

router.post("/api/addLocation", function (req, res) {
  console.log(req.body);
  // db.User.findOne({
  //   where:{
  //     email:req
  //   }
  // });
});

module.exports = router;
