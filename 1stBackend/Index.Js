const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
function GlobalDefence(req, res, next) {
  console.log("Global Defence BOIIIIII");
  next();
}

// set our "views" engine, so we can display actual html
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.status(200).send;
  res.render("index");
});

/* actually initializing the app */
app.listen(5959, () => {
  console.log("Captain, We are up and running. All systems are green");
});


const pirateRouter = require("./routes/pirates")
app.use("/pirates", pirateRouter)
