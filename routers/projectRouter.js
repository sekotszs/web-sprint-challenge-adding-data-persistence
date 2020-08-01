const express = require("express");
const project = require("../models/projectModel");

const router = express.Router();

router.get("/", (req, res) => {
  project
    .find()
    .then((project) => {
      res.json(project);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "There is an error connecting to the database" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  project
    .findById(id)
    .then((project) => {
      if (project) {
        res.json(project);
      } else {
        res.status(404).json({ message: "There is no project with that id" });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "There is an error connecting to the database" });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;
  project
    .addProject(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "There is an error connecting to the database" });
    });
});

module.exports = router