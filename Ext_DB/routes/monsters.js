const express = require("express");
const router = express.Router();
const Monster = require("../model/monster");
const department = require("../model/department");

Monster.belongsTo(department, {
  foreignKey: "department_id",
});

//get all monsters
router.get("/", (req, res) => {
  const sql_data = { where: {}, include: [department] };

  if (req.query.name) {
    sql_data.where.name = req.query.name;
  }
  if (req.query.race) {
    sql_data.where.race = req.query.race;
  }
  if (req.query.department_id) {
    sql_data.where.department_id = req.query.department_id;
  }
  if (req.query.spa) {
    sql_data.where.spa = req.query.spa;
  }
  Monster.findAll(sql_data)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

//get single monster
router.get("/:monster_id", (req, res) => {
  const monster_id = parseInt(req.params.monster_id);

  Monster.findByPk(monster_id)
    .then((result) => {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send("are you sure they are here???");
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

//create new monster

router.post("/", (req, res) => {
  const { age, spa, race } = req.body;
  if (age < 18 || spa <= 1.5 || race.toLowerCase() === "human") {
    return res.status(400).send({
      error:
        "I'm sorry. you must be a full , We only allow the scariest of monsters, and do not be ridiculous a human would not survive here.",
    });
  }
  Monster.create(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

//update monster

router.patch("/:monster_id", (req, res) => {
  const monster_id = parseInt(req.params.monster_id);

  Monster.findByPk(monster_id).then((result) => {
    if (result) {
      //updates db with new data sent
      Object.assign(result, req.body);
      const { age, spa, race } = req.body;
      if (
        age <= 18 ||
        (spa && spa <= 1.5) ||
        (race && race.toLowerCase() === "human")
      ) {
        return res.status(400).send({
          error:
            "I'm sorry. you must be a full , We only allow the scariest of monsters, and do not be ridiculous a human would not survive here.",
        });
      }
      result
        .save()
        .then(() => {
          res.status(200).send(result);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    } else {
      res.status(404).send("are you sure they are here???");
    }
  });
});

//delete monster
router.delete("/:monster_id", (req, res) => {
  const monster_id = parseInt(req.params.monster_id);

  Monster.findByPk(monster_id).then((result) => {
    if (result) {
      result
        .destroy()
        .then(() => {
          res.status(200).send(result);
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    } else {
      res.status(404).send("are you sure they are here???");
    }
  });
});
module.exports = router;
