const express = require("express");
const app = express();
const path = require("path");
const contentful = require("contentful");
const cors = require("cors");

const client = contentful.createClient({
  space: "8tjh3iu7zcf1",
  accessToken: "blMbzyPmhrByPUrh4Oza4kru7nnM1rPP5aP4RliAunQ",
});

app.use(cors({
  origin: "*"
}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/our-brand/:id", express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  client.getEntry("7gdja3MIMOs2rOQT9p1axd").then((entry) => {
    res.render("index", { entry: entry.fields });
  });
});

app.get("/values", function (req, res) {
  client.getEntry("3jDDeWM7vhgETbXWAuvWja").then((entry) => {
    res.render("values", { entry: entry.fields });
  });
});

app.get("/our-brand", function (req, res) {
  client.getEntry("616xPWE78QnfDLleJTx3CS").then((entry) => {
    console.log("Our Brand:", entry.fields);
    client
      .getEntries({
        content_type: "products",
      })
      .then((entries) => {
        console.log(entries.items[0].fields?.countries);
        res.render("1 Our Brand", {
          entries: entries.items,
          entry: entry.fields,
        });
      });
  });
});

app.get("/our-brand/:id", async function (req, res) {
  const { id } = req.params;

  const entry = await client.getEntry(id);
  const entries = await client.getEntries({
    content_type: "products",
  });

  res.render("2 Detail beer", {
    id,
    entry,
    entries: entries.items,
  });
});

app.listen(5001, () => {
  console.log("Server is running on http://localhost:5001");
});
