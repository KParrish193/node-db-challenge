const router = require("express").Router();

const Projects = require("./projects-model.js");

//add projects endpoints

// | actions                    | methods |               endpoints |
// | :------------------------- | :-----: | ----------------------: |
// | list of projects           |   GET   |           /api/projects |
// | add project                |  POST   |           /api/projects |
// | list of tasks              |   GET   | /api/projects/:id/tasks |
// | add task                   |  POST   | /api/projects/:id/tasks |




module.exports = router;