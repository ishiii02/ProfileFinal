const path = require("path");

exports.index = (req, res) => {
  res.render("home", { title: "Home - CluzaProfileFinal" });
};

