const express = require("express");
const app = express();
var addDays = require("date-fns/addDays");
app.get("/", (request, response) => {
  let date = new Date();
  const result = addDays(date, 100);
  let dated = result.getDate();
  let month = result.getMonth() + 1;
  let year = result.getFullYear();
  response.send(`${dated}/${month}/${year}`);
});
module.exports = app;
app.listen(3000);
