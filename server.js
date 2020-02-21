const express = require('express');

const ResourcesRouter = require('./resources/resourcesRouter.js');
const ProjectsRouter = require('./projects/projectsRouter.js');

const server = express();

server.use(express.json());
server.use('/api/resources', ResourcesRouter);
server.use('/api/projects', ProjectsRouter);

module.exports = server;