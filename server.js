const express = require("express");
const db = require("./database");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  let sql = "SELECT * FROM todo";
  let list = [];
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      list.push(row);
    });
    console.log(list[0].task);
    res.render("index", { tasks: rows });
  });
});

app.get("/addtask", (req, res) => {
  res.render("addtask");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
