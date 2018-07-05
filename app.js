var express     = require("express"),
    app         = express(),
    ejs         = require("ejs");

app.set("view engine", "ejs");
app.use(express.static("Assets"));

app.get("/", function(req, res){
    res.render("index");
});

app.get("*", function(req, res){
    res.render("index");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("TODO LIST APP ONLINE");
});