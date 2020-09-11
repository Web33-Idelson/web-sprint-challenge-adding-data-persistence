const express = require("express");
const knex = require("knex");
const Projects = require('./projectsModel.js');
const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.json(projects);
        })
        .catch(error => {
            res.status(500).json({ message: "Failed getting projects" })
        })
});

router.get('/resources', (req, res) => {
    Projects.getResources()
        .then(resources => {
            res.json(resources);
        })
        .catch(error => {
            res.status(500).json({ message: "Failed getting resources" })
        })
})

router.get('/tasks', (req, res) => {
    Projects.getTasks()
        .then(tasks => {
            res.json(tasks);
        })
        .catch(error => {
            res.status(500).json({ message: "Failed getting tasks" })
        })
})

router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.addProjects(projectData)
        .then(created => {
            res.status(201).json({ created })
        })
        .catch(error => {
            res.status(500).json({ message: "Failed creating new project" })
        })
})

router.post('/resources', (req, res) => {
    const resourceData = req.body;

    Projects.addResources(resourceData)
        .then(created => {
            res.status(201).json({ created })
        })
        .catch(error => {
            res.status(500).json({ message: "Failed creating new resource" })
        })
})

router.post('/:id/tasks', (req, res) => {
    const taskData = req.body;
    const id = req.params.id;

    Projects.addTasks(id, taskData)
        .then(created => {
            res.status(201).json({ taskData })
        })
        .catch(err => {
            res.status(500).json({ message: "Failed creating new task" })
        })
})

module.exports = router;