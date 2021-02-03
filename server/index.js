import express from "express";
import path from "path";

const build = path.join("../client/build");

const app = express();

app.use(express.static(build));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: build });
});

app.listen(5000);
