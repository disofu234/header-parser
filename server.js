var express = require("express");
var useragent = require("express-useragent");

var app = express();

app.get("/", function(req, res){
    var source_os = req.headers["user-agent"];
    var os = useragent.parse(source_os).os;
    
    var ip = req.headers["x-forwarded-for"];
    
    var lan = req.headers["accept-language"].split(",")[0];
    
    var obj = {
        "OS": os,
        "ip": ip,
        "language": lan
    };
    
    res.json(obj);
});

app.listen(process.env.PORT);