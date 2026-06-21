const path = require("path");

exports.index = (req, res) => {
  res.render("about", { title: "About - CluzaProfileFinal" });
};

