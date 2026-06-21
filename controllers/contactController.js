const path = require("path");
const fs = require("fs");

exports.index = (req, res) => {
  const contactInfoData = fs.readFileSync(path.join(__dirname, "../data/contactInfo.json"), "utf8");
  const contactInfo = JSON.parse(contactInfoData);
  res.render("contact", { 
    title: "Contact - CluzaProfileFinal",
    contactInfo: contactInfo
  });
};

exports.submit = (req, res) => {
  // In a real application, you would save the message to a database or send an email
  // For now, we'll just log it and redirect back with a success message
  console.log("Contact form submitted:", req.body);
  // Redirect back to the contact page with a success query parameter
  res.redirect("/contact?success=1");
};
