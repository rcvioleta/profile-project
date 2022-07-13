const express = require('express');

const testController = require('./test.controller');

const testRouter = express.Router();

testRouter.get('/friends', testController.getFriends);

module.exports = testRouter;