const http = require("http");
const fs = require("fs");
const path = require("path");

var arg = process.argv[2];
http.createServer(function(req, res) {
    var filePath = path.join(__dirname, "/" + arg);
    if(arg == undefined) {
        filePath = path.join(__dirname, "/fileReader1.js")
    }
    else{
        filePath = path.join(__dirname, "/" + arg);
    }
    fs.readFile(filePath, function(err, data) {
        if(err) {
            console.log(err);
        }
        else{
            res.write(data);
            res.end();
        }
    });
}).listen(8081);
console.log("server is listening 8081");