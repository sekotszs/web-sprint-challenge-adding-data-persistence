const express = require("express");
const resource = require("../models/resourceModel");
const router = express.router;

router.get("/", (req, res) => {
  resource
    .find()
    .then((resource) => {
      res.json(resource);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "There is an error connecting to the database" });
    });
});

router.get('/:id', (req,res) => {})