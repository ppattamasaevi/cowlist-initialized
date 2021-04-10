const mysql = require('mysql2/promise');
const { MYSQL_PWD } = require('../config/config.js');


const Cows = `(
  id SMALLINT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
  description VARCHAR(500),

  PRIMARY KEY (id)
)`;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: MYSQL_PWD
})

db
  .then((connection) => {
    console.log('---- DB Connected ----');
    return connection;
  })
  .catch((err) => console.log('---- DB connection failed ----', err))
  .then((connection) => {
    connection.query(`CREATE DATABASE IF NOT EXISTS cowlist`);
    return connection;
  })
  .then((connection) => {
    connection.query('USE cowlist');
    return connection;
  })
  .then((connection) => {
    connection.query(`CREATE TABLE IF NOT EXISTS cows ${Cows}`);
  })
  .catch((err) => console.log(`Failed to initialize DB: `, err));


module.exports = db;