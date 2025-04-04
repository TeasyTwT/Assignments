const express = require("express");
const app = express();
const { add, sub, mul, div } = require("./Calc");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function GlobalDefence(req, res, next) {
  console.log("Global Defence BOIIIIII");
  next();
}

let num1 = 64;
let num2 = 360;

app.use(GlobalDefence);

app.get("/Add", (req, res) => {
  let result = `Add ${add(num1, num2)}`;

  res.send(result);
});
app.get("/Sub", (req, res) => {
  let result = `Sub ${sub(num1, num2)}`;

  res.send(result);
});
app.get("/Mul", (req, res) => {
  let result = `Mul ${mul(num1, num2)}`;

  res.send(result);
});
app.get("/Div", (req, res) => {
  let result = `Div ${div(num1, num2)}`;

  res.send(result);
});

app.post("/Add", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  let sum = add(num1, num2);

  res.send(`${num1} + ${num2} = ${sum}`);
});
app.post("/Sub", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  let sum = sub(num1, num2);
  res.send(`${num1} - ${num2} = ${sum}`);
});
app.post("/Mul", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  let sum = mul(num1, num2);
  res.send(`${num1} * ${num2} = ${sum}`);
});
app.post("/Div", (req, res) => {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  let sum = div(num1, num2);

  res.send(`${num1} \ ${num2} = ${sum}`);
});

app.listen(3000, function () {
  console.log("OH LORD WE RUNNING. WE DOCKING @ PORT 3000 LADDIES");
});
