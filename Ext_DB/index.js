const express = require("express");
const app = express();
const db_config = require('./Db_config');
const Monster = require('./model/monster');

const reqCount = {
    GET: 0,
    POST: 0,
    PUT: 0,
    PATCH: 0,
    DELETE: 0,
};

app.use((req, res, next) => {
    const method = req.method.toUpperCase();
    if (reqCount.hasOwnProperty(method)) {
        reqCount[method] += 1;
    }
    console.log("There has been", reqCount, "request(s)");
    next();
});

db_config.authenticate().then(()=>{
    console.log('Nice work!');
}).catch((err) =>{
    console.log('You did something wrong brah' + err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const monsterRouter = require("./routes/monsters")
app.use("/monsters", monsterRouter)


app.listen(3000, function () {
  console.log("Horrific evening your terribleness");
});
