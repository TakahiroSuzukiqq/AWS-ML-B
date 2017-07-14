var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');

const LiqApi = require('../models/LiqApi');
//const indexController = require('../controllers/indexController');
const amlController = require('../controllers/amlController');

/* GET home page = get aml api data */ 
router.get('/', amlController.getApiData);

//post aml api data
router.post('/', amlController.requestApiData)


module.exports = router;

