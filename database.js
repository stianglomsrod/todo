const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./todo.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) return console.error(err.message);
});

let sql =
  "CREATE TABLE IF NOT EXISTS todo (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT NOT NULL, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)";

db.run(sql);

// let test = "INSERT INTO todo (task) VALUES ('Kjøpe melk')";
// db.run(test);

module.exports = db;
