const fs = require("fs");
console.log(fs);
fs.readFile(__dirname+"/hello.txt","utf8",(err,data)=>{
  console.log(data);
});

console.log("ended file successfully");

//fast output shows/print first...
