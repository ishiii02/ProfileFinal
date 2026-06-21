const express = require("express");
const path = require("path");
const routes = require("./routes/index");

const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Middleware to parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the routes
app.use("/", routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

