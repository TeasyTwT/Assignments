const express = require("express");
const router = express.Router();
const Monster = require("../model/monster");

//get all monsters
router.get("/", (req, res) => {
  const sql_data ={ where: {}};
 
  if(req.query.name){
    sql_data.where.name = req.query.name;
  }
  if(req.query.race){
    sql_data.where.race = req.query.race;
  }
  if(req.query.department){
    sql_data.where.department = req.query.department;
  }
  if(req.query.spa){
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
