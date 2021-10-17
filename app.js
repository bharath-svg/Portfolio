const express = require("express");

const bodyparser = require("body-Parser");
const ejs = require("ejs");
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
const $ = require("jquery")(window);
const anime = require("anime");


const app = express();

app.set('view engine', "ejs");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", function(req , res){
    res.render("home");
});

app.get("/about", function(req , res){
    res.render("about");
});

app.get("/contact", function(req , res){
    res.render("contact");
});

app.get("/projects", function(req , res){
    res.render("projects");
});









app.listen(4000 , function(){
    console.log("server is running at port 4000");
})