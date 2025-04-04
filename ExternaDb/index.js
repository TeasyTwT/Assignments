//npm init -y
//npm i express sequelize mariadb
//npm install --save-dev nodemon

const express = require("express");
const app = express();
const db_config = require('./Db_config');
const Monster = require('./model/monster');

db_config.authenticate().then(()=>{
    console.log(' YAY!! ^w^ database connected');
}).catch((err) =>{
    console.log('Ewwow occuwed :c' + err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

function GlobalDefence(req, res, next) {
  console.log("Global Defence BOIIIIII");
  next();
}

const monsterRouter = require("./routes/monsters")
app.use("/monsters", monsterRouter)

app.use(GlobalDefence);








app.listen(3000, function () {
  console.log("hehe >////< database is wunnin datte-bayo! ");
});
