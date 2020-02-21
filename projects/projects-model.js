const db = require("../data/dbConfig.js")

module.exports = {
    findProjects,
    findProjectById,
    getTasksByProject,
    addProject,
    removeProject,
    addTask,
    removeTask,
};

function findProjects(){
    return db("projects")
};

function findProjectById(id){
    return db("projects")
        .where({ id })
        .first();
};

function getTasksByProject(id){
    return db("projects")
        .where({ id })
        .first()
        .then(project => {
            return db("tasks")
            .join("projects", "tasks.project_id", "projects.id")
            .select(
                "projects.project_name as Project Name",
                "projects.project_description as Project Description", 
                "tasks.task_description as Task Description")
            .where({"tasks.project_id": id })
        })
};

function addProject(project){
    return db("projects")
        .insert(project, "id")
};

// function updateProject(changes, id){
//     return db("projects")
//         .where({ id })
//         .update(changes)
//         .then(updatedProject => {
//             return findProjectById(id[0]);
//         });
// };

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