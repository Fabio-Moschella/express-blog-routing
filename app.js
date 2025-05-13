const { posts } = require("./posts.js");
const express = require("express");
const appBlog = express();
const port = 3000;

appBlog.use(express.static("pubblic"));

appBlog.get("/", (req, res) => {
  res.send("Server del mio blog");
});
appBlog.get("/bacheca", (req, res) => {
  res.json(posts);
});
appBlog.listen(port, () => {
  console.log("il server è in ascolto sulla porta" + port);
});
