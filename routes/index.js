const express = require("express");
const router = express.Router();

const homeRoutes = require("./homeRoutes");
const aboutRoutes = require("./aboutRoutes");
const skillsRoutes = require("./skillsRoutes");
const projectsRoutes = require("./projectsRoutes");
const contactRoutes = require("./contactRoutes");

router.use("/", homeRoutes);
router.use("/about", aboutRoutes);
router.use("/skills", skillsRoutes);
router.use("/projects", projectsRoutes);
router.use("/contact", contactRoutes);

// 404 handler
router.use((req, res) => {
  res.status(404).render("errors/404", { title: "Page Not Found - CluzaProfileFinal" });
});

module.exports = router;

