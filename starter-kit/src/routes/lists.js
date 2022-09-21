const router = require("express").Router();
let List = require("../models/list");

router.route("/").get((req, res) => {
  List.find()
    .populate("cards")
    .then((lists) => res.json(lists))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/:id").get((req, res) => {
  List.findById(req.params.id)
    .populate("cards")
    .then((list) => res.json(list))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/create").post((req, res) => {
  const name = req.body.name;
  const newList = new List({ name });

  newList
    .save()
    .then(() => {
      res.json("List created");
    })
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/update/:id").post((req, res) => {
  List.findById(req.params.id)
    .then((list) => {
      list.name = req.body.name;
      list.cards = req.body.cards;

      list
        .save()
        .then(() => res.json("List updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  List.findByIdAndDelete(req.params.id)
    .then(() => res.json("List deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
