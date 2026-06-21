const path = require("path");
const fs = require("fs");

exports.index = (req, res) => {
  const projectsData = fs.readFileSync(path.join(__dirname, "../data/projects.json"), "utf8");
  const projects = JSON.parse(projectsData);
  res.render("projects", { 
    title: "Projects - CluzaProfileFinal",
    projects: projects
  });
};

