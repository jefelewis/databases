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

exports.sendResponse = function(status, response) {
  response.writeHead(status, exports.headers);
  response.end(response);
};

// 
module.exports = {
  messages: {
    get: function (req, res) {
      db.connection.query(function(err, data) {
        if (err) {
          console.log("Connection Error" , err);
          console.log(err.fatal);
          
        }
        console.log(data);
        res.send('response sent');
        // exports.sendResponse(201, data);
        
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      db.connection.query('INSERT into messages SET ?', req.body, function(err, result) {
        if (err) {
          console.log('There was an error');
          return;
        }
        exports.sendResponse(201, data);
        res.send('Message added to database with ID: ' + result.insertId);
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {

    }
  }
}

