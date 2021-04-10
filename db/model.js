const db = require('./index.js');

console.log(db);

module.exports = {

  saveOne: (params) => {
    return db
      .then((connection) => {
        return connection.query(`INSERT INTO cows (name, description) VALUES (?, ?)`, params);
      })
  },

  getAll: () => {
    return db
      .then((connection) => {
        return connection.query(`SELECT * FROM cows`);
      })
  }

}