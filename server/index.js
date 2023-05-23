const express = require("express");
const app = express();
const port = 5174;
const cors = require("cors");
const fs = require("fs");
const path = require("path");

app.use(cors());

// respond with "quote" when a GET request is made to the homepage
app.get("/api/quote", (req, res) => {
  // Read the contents of the quotes.json file
  const filePath = path.join(__dirname, "quotes.json");
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Parse the JSON data from the file
  const quotes = JSON.parse(fileContents);

  // Select a random quote
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Send the random quote as the response
  res.json(randomQuote);
});

app.listen(port, () => {
  console.log(`Server listening on the port ${port}`);
});
