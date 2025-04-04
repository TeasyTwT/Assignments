const express = require("express");
const router = express.Router();

function parseBool(str) {
  return str.toLowerCase() === "true" ? true : false;
}

const pirates = [
  {
    Name: "Knotty Beard",
    Crew: "Captain",
    TreasurePlundered: 500000,
    VaultAccess: true,
    Vessel: "Goldours",
  },
  {
    Name: "Long stach",
    Crew: "FirstMate",
    TreasurePlundered: 450000,
    VaultAccess: true,
    Vessel: "Goldours",
  },
  {
    Name: "Dab Loons",
    Crew: "Tresurer",
    TreasurePlundered: 25000,
    VaultAccess: true,
    Vessel: "Goldours",
  },
  {
    Name: "Barb arossa",
    Crew: "Deckhand",
    TreasurePlundered: 30000,
    VaultAccess: false,
    Vessel: "Goldours",
  },
  {
    Name: "Arrrthur Itis",
    Crew: "Deckhand",
    TreasurePlundered: 145000,
    VaultAccess: false,
    Vessel: "Goldours",
  },
  {
    Name: "Plank Sinatra",
    Crew: "Deckhand",
    TreasurePlundered: 85000,
    VaultAccess: false,
    Vessel: "Goldours",
  },
  {
    Name: "Cap’n CrunchTime",
    Crew: "Captain",
    TreasurePlundered: 675000,
    VaultAccess: true,
    Vessel: "Tinkamarina",
  },
  {
    Name: "Scurvy Jones",
    Crew: "FirstMate",
    TreasurePlundered: 325000,
    VaultAccess: false,
    Vessel: "Tinkamarina",
  },
  {
    Name: "Oranges Jones",
    Crew: "DeckHand",
    TreasurePlundered: 335000,
    VaultAccess: false,
    Vessel: "Tinkamarina",
  },
  {
    Name: "The Man",
    Crew: "Captain",
    TreasurePlundered: 2147483647,
    VaultAccess: true,
    Vessel: "The Dingy",
  },
];

//get all pirates
router.get("/", (req, res) => {
  let pirates_data = [...pirates];
  if (req.query.Vessel) {
    pirates_data = pirates_data.filter((pirate_item) => {
      return pirate_item.Vessel === req.query.Vessel;
    });
  }

  res.status(200).send(pirates_data);
});

//Get one pirate
router.get("/:pirate_name", (req, res) => {
  const pirates_name = req.params.pirate_name; // Get name from request URL

  const pirate = pirates.find(
    (pirate_item) =>
      pirate_item.Name.toLowerCase() === pirates_name.toLowerCase()
  );
  if (pirate) {
    res.status(200).send(pirate);
  } else {
    res.status(404).send("Pirate may be overboard");
  }
});

//Create pirate
router.post("/", (req, res) => {
  const pirate = req.body;
  pirate.TreasurePlundered = parseFloat(pirate.TreasurePlundered);
  //adding new item into pirate array
  pirates.push(pirate);
  res.status(201).send(pirate);
});

//change pirate data
router.put("/:pirate_name", (req, res) => {
  const pirates_name = req.params.pirate_name; // Get name from request URL
  const index = pirates.findIndex((pirate_item) => {
    return pirate_item.Name === pirates_name;
  });
  if (index >= 0) {
    const pirate = req.body;
    pirate.TreasurePlundered = parseFloat(pirate.TreasurePlundered);
    pirate.VaultAccess = parseBool(pirate.VaultAccess);

    pirates[index] = pirate;
    res.status(200).send(pirate);
  } else {
    res.status(400).send("We dont know that land lubber");
  }
});

//patch a pirates treasure plundered
router.patch("/:pirates_name", (req, res) => {
  const pirates_name = req.params.pirates_name; // Get name from request URL
  //WHY FOR PATCH Did I need to change from "params.pirate_name" to "params.pirateS_name" what is the difference???? Shouldnt it be the same thing????
  const index = pirates.findIndex((pirate_item) => {
    return pirate_item.Name === pirates_name;
  });

  if (index >= 0) {
    //get pirates from array
    const pirate = pirates[index];

    pirate.TreasurePlundered = parseFloat(req.body.TreasurePlundered);
    res.status(200).send(pirate);
  } else {
    res.status(400).send("We dont know that land lubber");
  }
});

//delete pirate
router.delete("/:pirates_name", (req, res) => {
  const pirates_name = req.params.pirates_name; // Get name from request URL
  const index = pirates.findIndex((pirate_item) => {
    return pirate_item.Name === pirates_name;
  });

  if (index >= 0) {
    const pirate = pirates[index];
    pirates.splice(index, 1);
    res.status(200).send(pirate);
  } else {
    res.status(400).send("We dont know that land lubber");
  }
});
module.exports = router;
