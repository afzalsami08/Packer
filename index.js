var http = require("http");

const hostname = "192.168.1.101";
const port = 3000;

const server = http.createServer((req,res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type","text/plain");
  res.end("hello world");
});

server.listen(port,hostname,() => {
  console.log(`Server is running on ${hostname}:${port}`)
});