const mongoose = require('mongoose');
var request = require('request');
const LiqApi = require('../models/LiqApi');

//#GET amazon machine learning api data
exports.getApiData = (req, res) => {
  LiqApi.find()
    .then((liqApi) => {
        res.render('index', {
            title : liqApi,
           liqApi: liqApi
        })
    })
};

// exports.getApiData = (req, res) => {
//     LiqApi.find()
// 		.then(liqApi => {    //mlab
// 			res.json(liqApi) //mlab
// 		})
// };

exports.requestApiData = (req, res) => {
    const name = req.body.name;
    let liqApiData = new LiqApi();
    liqApiData.name = name;
    liqApiData.save()
      .then(() => {
          res.redirect('/')
      })
};

