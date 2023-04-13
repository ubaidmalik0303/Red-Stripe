const express = require("express");
const app = express();
const path = require("path");
const contentful = require("contentful");

const client = contentful.createClient({
  space: "8tjh3iu7zcf1",
  accessToken: "blMbzyPmhrByPUrh4Oza4kru7nnM1rPP5aP4RliAunQ",
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/public"));

app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  client.getEntry("7gdja3MIMOs2rOQT9p1axd").then((entry) => {
    console.log(
      "Entry image url =>",
      entry.fields.heroBottleImage.fields.file.url
    );
    res.render("index", { entry: entry.fields });
  });
});

app.get("/values", function (req, res) {
  client.getEntry("3jDDeWM7vhgETbXWAuvWja").then((entry) => {
    console.log(entry)
    res.render("values", { entry: entry.fields });
  });
});

app.listen(5001, () => {
  console.log("Server is running on http://localhost:5001");
});
