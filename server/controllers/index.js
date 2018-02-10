var models = require('../models');
var mysql = require('mysql');
var db = require('../db');

//controller reaches into models.js and update your database

exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

// 
module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(res);
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, res);
       // a function which handles posting a message to the database
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {

    }
  }
}
