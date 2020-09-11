const db = require('../data/dbConfig.js');

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProjects,
    addResources,
    addTasks
}

function getProjects(){
    return db("projects");
}

function getProjectsById(id){
    return db("projects").where({ id }).first();
}

function getResources(){
    return db("resources");
}

function getResourcesById(id){
    return db("resources").where({ id }).first();
}

function getTasks() {
    return db("tasks as t")
        .join("projects as p", "t.project_id", "=", "p.id")
        .select("t.*", "p.project_name", "p.description as project_description")
}

function addProjects(project){
    return db("projects")
    .insert(project)
    .returning("id")
    .then(ids => {
        const id = ids[0]
        return getProjectsById(id)
    })
}

function addResources(resource){
    return db("resources")
    .insert(resource)
    .returning("id")
    .then(ids => {
        const id = ids[0]
        return getResourcesById(id)
    })
}

// function addTasks(project_id, task) {
//     return db("tasks as t")
//         .join("projects as p", "t.project_id", "=", "p.id")
//         .insert(task)
//         .where("t.project_id", project_id)
// }
function addTasks(task, id){
    return db('tasks').insert(task).where({ projectId: id })
}