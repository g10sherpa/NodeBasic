//pre-built module
const http = require("http");
const server = http.createServer(function(req, res) {
  res.writeHead(400,{
    "content-type": "text/html"
  });
  res.write("<h1>node Js Tutorial running</h1>");
  res.end();
}).listen(3000, () => console.log("server running on port 3000"));
