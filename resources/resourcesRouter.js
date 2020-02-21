const router = require("express").Router();

const Resources = require("./resources-model.js");

//add resources endpoints
// | list of resources          |   GET   |          /api/resources |
// | add resources              |  POST   |          /api/resources |
// | get project by id(stretch) |   GET   |        /api/project/:id |

module.exports = router;