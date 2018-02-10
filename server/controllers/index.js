var models = require('../models');
var mysql = require('mysql');

//controller reaches into models.js and update your database


// 
module.exports = {
  messages: {
    get: function (req, res) {
      connection.connect(function(err) {
        if (err) {
          console.log("Connection Error" , err);
          return;
        }
        console.log('connected as id' + connection.threadId);
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      connection.query('INSERT into messages SET ?', req.body, function(err, result) {
        if (err) {
          console.log('There was an error');
          return;
        }
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

