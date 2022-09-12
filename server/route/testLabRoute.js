const express = require("express");
const { createTestLabCtrl } = require("../controllers/testlabCtrl");
const testLabRoute = express.Router();

testLabRoute.post('/register', createTestLabCtrl);


module.exports = testLabRoute;