const express = require("express");
const path = require("path");
const routes = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

// ── View Engine ────────────────────────────────────────────────────────────────
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// ── Security Headers ───────────────────────────────────────────────────────────
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
});

// ── Static Files ───────────────────────────────────────────────────────────────
app.use(express.static(path.join(__dirname, "public")));

// ── Body Parsers ───────────────────────────────────────────────────────────────
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ── Routes ─────────────────────────────────────────────────────────────────────
app.use("/", routes);

// ── Global Error Handler ───────────────────────────────────────────────────────
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.status || 500;
  res.status(statusCode).render("errors/500", {
    title: "Server Error - CluzaProfileFinal",
    message: process.env.NODE_ENV === "production"
      ? "An unexpected error occurred."
      : err.message,
  });
});

// ── Start Server ───────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT} [${process.env.NODE_ENV || "development"}]`);
});

module.exports = app; // exported for testing