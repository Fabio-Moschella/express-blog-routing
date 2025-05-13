const express = require("express");
const app = express();
const port = 3000;
const postRouter = require("./routers/posts.js");
app.use(express.static("pubblic"));

//ROUTERS
app.use(postRouter);
// IL SERVER E IN ASCOLTO SULLA PORTA 3000
app.listen(port, () => {
  console.log("il server è in ascolto sulla porta" + port);
});
