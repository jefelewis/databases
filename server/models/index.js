var db = require('../db');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function () {
      var data = {
        "data" : ""
      };

      connection.query('SELECT message from messages', function(err, rows, fields) {
        if (err) {
          console.log(err);
          return;
        }
        if (rows.length !== 0) {
          data['Data'] = rows;
          console.log(data);
          res.json(data);
        } else {
          console.log('no data');
          data['Data'] = 'No data found';
          res.json(data);
        }
      });
    }, // a function which produces all the messages
    post: function (message) {

      connection.query(`INSERT INTO messages (users_id, room, message) VALUES (?, ?, ?)`, message, function(err, res) {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Last inserted message ID: ', res.insertId)
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

