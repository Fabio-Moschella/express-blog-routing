const express = require("express");
const blogPost = require("../data/blogPosts.js");
const post = express.Router();

post.get("", (req, res) => {
  res.json("Lettura della lista dei post");
});
// ROUT PER I DETTAGLI DEL BLOG
post.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json("Lettura del dettaglio dei post" + id);
});

//ROUT PER LA CREAZIONE DEL POST
post.post("", (req, res) => {
  res.json("Creazione del post");
});

//ROUT PER LA MODIFICA DEL POST
post.put("/:id", (req, res) => {
  const id = req.params.id;
  res.json("Modifica totale del post" + id);
});

//ROUT PER LA ELIMINAZIONE DEL POST
post.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json("Eliminazione del post" + id);
});

module.exports = post;
