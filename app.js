const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("home");
});

app.post('/createbadge', (req, res) => {
    const label = req.body.label;
    const message = req.body.message;
    const color = req.body.color;
    
    res.render("/" + label + "-" + message + "-" + color);
})

app.listen(process.env.PORT || 3000, process.env.ID, () => {
    console.log("Your app is running in 'https://git-badge-oxdbg.run-us-west2.goorm.io'");
});