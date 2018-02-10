var db = require('../db');
var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});
connection.connect((err) => {
  if (err) {
      console.log('Error connecting...');
      return;
  }
  console.log('Connected!');
});



module.exports = {
  messages: {
    get: function (req, res) {
      var data = {
        "data" : ""
      };

      connection.query('SELECT message from messages', function(err, rows, fields) {
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
    post: function (req, res) {
      var data = {
        "data" : ""
      };

      connection.query(`insert into messages (${data['data']}), data`, function(err, row, fields) {
        if (rows.length !== 0) {
          data['Data'] = rows;
          console.log(data);
          res.json(data);
        } else {
          console.log('no data');
          data['Data'] = 'No data found';
          res.json(data);
        }
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

