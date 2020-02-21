const db = require("../data/dbConfig.js")

module.exports = {
    findProjects,
    getTasksByProject,
    addProject,
    updateProject,
    removeProject,
    addTask,
    removeTask,
};

function findProjects(){
    return db("projects")
};

function getTasksByProject(project_id){
    return db("projects")
        .where({ id })
        .first()
        .then(project => {
            return db("tasks")
            .join("projects", "tasks.project_id", "project.id")
            .select(
                "projects.project_name as Project Name",
                "projects.project_description as Project Description", 
                "tasks.task_description as Task Description")
            .where({"tasks.project_id": project_id })
        })
};

function addProject(project){
    return db("projects")
        .insert(project, "id")
        .then(id => {
            return findById(id[0])
        });
};

function updateProject(changes, id){
    return db("projects")
        .where({ id })
        .update(changes)
        .then(updatedProject => {
            return findById(id[0]);
        });
};

function removeProject(id){
    return db("projects")
        .where({ id })
        .then(found => {
            return db("projects")
            .where({ id })
            .del()
        });
};

function addTask(task){
    return db("tasks")
        .insert(task, "id")
        .then(id => {
            return findById(id[0])
        });
};

function removeTask(id){
    return db("tasks")
        .where({ id })
        .then(found => {
            return db("tasks")
            .where({ id })
            .del()
        });
};