const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve files inside /public folder
app.use(express.static("public"));

// Root route → show index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
