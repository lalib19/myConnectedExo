const router = require("express").Router();
let Card = require("../models/card");

router.route("/").get((req, res) => {
  Card.find()
    .then((cards) => res.json(cards))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Card.findById(req.params.id)
    .then((card) => res.json(card))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/create").post((req, res) => {
  const name = req.body.name;
  const members = req.body.members;
  const description = req.body.description;
  const etiquettes = req.body.etiquettes;
  const checklist = req.body.checklist;
  const duration = Number(req.body.duration);

  const newCard = new Card({ name, members, description, etiquettes, checklist, duration});

  newCard
    .save()
    .then(() => {
      res.json("Card created");
    })
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/update/:id").post((req, res) => {
  Card.findById(req.params.id)
    .then((card) => {
      card.name = req.body.name;
      card.members = req.body.members;
      card.description = req.body.description;
      card.etiquettes = req.body.etiquettes;
      card.checklist = req.body.checklist;
      card.duration = Number(req.body.duration);

      card
        .save()
        .then(() => res.json("Card updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Card.findByIdAndDelete(req.params.id)
    .then(() => res.json("Card deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
