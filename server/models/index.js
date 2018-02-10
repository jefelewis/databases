var db = require('../db');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (res) {
      // Database Query
      db.connection.query('SELECT * from messages', function(err, result) {
        if (err) {
          console.log(err);
          return;
        }
        res.send({results: result});
      });
    }, // a function which produces all the messages
    post: function (message, res) {
      // Database Query
      db.connection.query(`INSERT INTO messages (users_id, room, message) VALUES ("${message.username}", "${message.roomname}", "${message.text}")`, function(err, res) {
        if (err) {
          console.log(err);
          return;
        }
        console.log('message received');
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

