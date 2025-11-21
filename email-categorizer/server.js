const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const SHEET_URL = "https://script.google.com/macros/s/AKfycbyRydCSQcQqVPIn0HpUmzHY6Chslu4NJWCZoU-Q6abY8do6RDLtd80G2AKdIPimZgk5/exec";

function categorize(email) {
  email = email.toLowerCase();

  if (email.includes("invoice") || email.includes("payment"))
    return "Finance";

  if (email.includes("job") || email.includes("resume"))
    return "HR";

  if (email.includes("error") || email.includes("bug"))
    return "Technical";

  return "General";
}

function autoReply(category) {
  switch (category) {
    case "Finance":
      return "Your mail has been forwarded to the finance department.";
    case "HR":
      return "HR has received your message and will respond shortly.";
    case "Technical":
      return "Our technical team will look into this issue.";
    default:
      return "Thank you for your email. We will get back to you soon.";
  }
}

app.post("/process", async (req, res) => {
  const { email } = req.body;

  const category = categorize(email);
  const reply = autoReply(category);

  await axios.post(SHEET_URL, {
  email,
  category,
  reply
}, {
  headers: { "Content-Type": "application/json" }
});

  res.json({ category, reply });
});

app.listen(3000, () => console.log("Server running on port 3000"));
