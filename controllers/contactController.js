const path = require("path");
const fs   = require("fs");

// ── Helpers ────────────────────────────────────────────────────────────────────
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ── GET /contact ───────────────────────────────────────────────────────────────
exports.index = (req, res, next) => {
  try {
    const raw         = fs.readFileSync(
      path.join(__dirname, "../data/contactInfo.json"),
      "utf8"
    );
    const contactInfo = JSON.parse(raw);
    const success     = req.query.success === "1";

    res.render("contact", {
      title: "Contact - CluzaProfileFinal",
      contactInfo,
      success,
    });
  } catch (err) {
    next(err);
  }
};

// ── POST /contact ──────────────────────────────────────────────────────────────
exports.submit = (req, res, next) => {
  try {
    const name    = escapeHtml((req.body.name    || "").trim());
    const email   = escapeHtml((req.body.email   || "").trim());
    const message = escapeHtml((req.body.message || "").trim());

    // Basic server-side validation
    if (!name || !email || !message) {
      return res.status(400).render("contact", {
        title:       "Contact - CluzaProfileFinal",
        contactInfo: JSON.parse(
          fs.readFileSync(path.join(__dirname, "../data/contactInfo.json"), "utf8")
        ),
        success: false,
        error:   "All fields are required.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).render("contact", {
        title:       "Contact - CluzaProfileFinal",
        contactInfo: JSON.parse(
          fs.readFileSync(path.join(__dirname, "../data/contactInfo.json"), "utf8")
        ),
        success: false,
        error:   "Please enter a valid email address.",
      });
    }

    // In production: send email / save to DB here
    console.log("Contact form submission:", { name, email, message });

    res.redirect("/contact?success=1");
  } catch (err) {
    next(err);
  }
};