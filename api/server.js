const express = require('express');

const carsRouter = require('../data/cars-router.js');

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter);

module.exports = server;