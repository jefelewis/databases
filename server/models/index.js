var db = require('../db');
var mysql = require('mysql');

exports.sendResponse = function(status, response) {
  response.writeHead(status, exports.headers);
  response.end(response);
};

module.exports = {
  messages: {
    get: function (message) {

      db.connection.query('SELECT message from messages', function(err, rows, fields) {
        if (err) {
          console.log(err);
          return;
        }
        exports.sendResponse(200, rows);
      });
    }, // a function which produces all the messages
    post: function (message) {

      db.connection.query(`INSERT INTO messages (users_id, room, message) VALUES (${message.username}, ${message.roomname}, ${message.text})`, function(err, res) {
        if (err) {
          console.log(err);
          return;
        }
        exports.sendResponse('message received');
      })

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function () {

    }
  }
};

