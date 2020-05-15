const fs = require("fs");
const http = require("http");
const server = http.createServer(function(req, res) {

fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{
  res.writeHead(400,{
    "content-type": "text/plain"
  });
  res.write(data);
  res.end();
});
}).listen(3000, () => console.log("server running on port 3000"));



//delete file?
//fs.unlink(__dirname+"/hello.txt",(err,data)=>{
  //if(err) throw err;
  //console.log("file deleted" +data);
//});
