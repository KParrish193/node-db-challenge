const router = require("express").Router();

const Resources = require("./resources-model.js");

//see list of resources
router.get('/', (req, res) => {
    Resources.findResources()
    .then(resources => {
        res.json(resources);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Error in request' });
    });
});

//add new resource
router.post('/', (req, res) => {
    const resourceDetails = req.body;

    Resources.addResource(resourceDetails)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch (err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to create new resource' });
        });
});

// get resources by project id
router.get('/project/:id ', (req, res) => {
    const id = req.params.id

    Resources.getResourcesByProject(id)
    .then(resources => {
        res.json(resources);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Error in request' });
    });
});

module.exports = router;