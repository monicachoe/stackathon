'use strict';

const app = require('./app');

const server = app.listen(3000, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log("Your server, listening on port 3000");
});

module.exports = server;