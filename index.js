const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Nothing..\n");
  res.end();
});

server.listen(8080);
console.log("Server running on port 8080");
