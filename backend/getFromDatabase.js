const mysql = require('mysql');

const connectionDetails = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'wellcome-books'
};

const getFromDatabase = (query) => {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection(connectionDetails);

    connection.connect();
    connection.query(query, (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
    connection.end();
  });
};

module.exports = getFromDatabase;