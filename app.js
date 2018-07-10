var express     = require("express"),
    app         = express(),
    ejs         = require("ejs"),
    bitballoon = require("bitballoon"),
    client     = bitballoon.createClient({access_token: "my-access-token"});
    
bitballoon.deploy({access_token: "some-token", site_id: "some-site", dir: "/path/to/site"}, function(err, deploy) {
  if (err) { return console.log(err); }
  console.log("New deploy is live");
});

app.set("view engine", "ejs");
app.use(express.static("Assets"));

app.get("/", function(req, res){
    res.render("index");
});

app.get("*", function(req, res){
    res.render("index");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("TODO LIST APP is ONLINE");
});