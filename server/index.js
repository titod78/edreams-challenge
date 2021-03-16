const path = require("path");
const express = require("express");
const app = express();
const itinerariesData = require("./data/itineraries.json");
const locations = require("./data/locations.json");
const port = 3000;

app.get("/itineraries", (req, res) => res.send(itinerariesData));
app.get("/locations", (req, res) => res.send(locations));
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
