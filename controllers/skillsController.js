const path = require("path");
const fs = require("fs");

exports.index = (req, res) => {
  const skillsData = fs.readFileSync(path.join(__dirname, "../data/skills.json"), "utf8");
  const skills = JSON.parse(skillsData);
  res.render("skills", { 
    title: "Skills - CluzaProfileFinal",
    skills: skills
  });
};

