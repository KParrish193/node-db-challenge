const router = require("express").Router();

const Projects = require("./projects-model.js");

//see all Projects
router.get('/', (req, res) => {
    Projects.findProjects()
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Error in request' });
    });
});

//see project by id
router.get('/:id', (req, res) => {
    const id = req.params.id

    Projects.findProjectById(id)
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Error in request' });
    });
});

//add new project
router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.addProject(projectData)
        .then(project => {
            res.status(201).json(project);
        })
        .catch (err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to create new project' });
        });
});

//see tasks by project
router.get('/:id/tasks', (req, res) =>{
    const id = req.params.id

    Projects.getTasksByProject(id)
        .then(tasks => {
            res.json(tasks);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Error in request' });
        });
}) 

//add new task by project
router.post('/:id/tasks', (req, res) =>{
    const taskData = req.body;

    Projects.addTask(taskData)
        .then(task => {
            res.status(201).json(task);
        })
        .catch (err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to create new task' });
        });
}) 

module.exports = router;