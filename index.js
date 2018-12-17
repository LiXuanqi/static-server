var express = require("express");
var path = require("path");
var http = require("http");

const PUBLIC_PATH = path.join(__dirname, './public');
const EXPOSE_PORT = 3000;

var app = express();

// Routers
var gobangRouter = require("./routes/gobang");
var resumeRouter = require("./routes/resume");
var blogRouter = require("./routes/blog");
app.use("/gobang", gobangRouter);
app.use("/resume", resumeRouter);
app.use("/blog", blogRouter);

// server
var server = http.createServer(app);
server.listen(EXPOSE_PORT);

server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  throw error;
}

function onListening() {
  let addr = server.address();
  let bind = typeof addr == 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listiening on ' + bind);
}