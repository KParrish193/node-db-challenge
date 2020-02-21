// - `get()`
// - `add(data)`
// - `getProjectResources(id)` - stretch

const db = require("../data/dbConfig.js")

module.exports = {
    findResources,
    addResource,
    removeResource,
    getResourcesByProject,

}

function findResources(){
    return db("resources")
};

function addResource(resource){
    return db("resources")
        .insert(resource, "id")
        .then(id => {
            return findById(id[0])
        });
};

function removeResource(id){
    return db("resources")
        .where({ id })
        .then(found => {
            return db("resources")
            .where({ id })
            .del()
        });
};

function getResourcesByProject(id){
    return db("resources")
        .where({ id })
        .first()
        .then(resource => {
            return db("bridge")
            .join("projects", "bridge.project_id", "project.id")
            .join("resources", "bridge.resource_id", "resources.id" )
            .select(
                "projects.id",
                "projects.project_name", )
            .where({"resources": id })
        })
};