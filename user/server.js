const express = require("express");
var router = express.Router();
const morgan = require("morgan");
const bodyparser = require("body-parser");
const DB_URI = require("./db.js");
console.log(DB_URI);
let cors = require("cors");
let oauth2Server = require("oauth2-server");
let Request = oauth2Server.Request;
 let Response = oauth2Server.Response;
const mongoose = require("mongoose");
const db = require("./models/oauth");
mongoose.connect(DB_URI);
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended : true
}))
app.use(morgan('dev')); 
app.use(cors({
    optionSuccessStatus : 200
}))

app.oauth = new oauth2Server({
    model : require("./models/oauth")
})

app.authenticate = function (option) {
    var options = option || {};
    return function(req, res, next) {
        var request = new Request({
            headers: {authorization: req.headers.authorization},
            method: req.method,
            query: req.query,
            body: req.body
        });
        var response = new Response(res);
        app.oauth.authenticate(request, response,options)
            .then(function (token) {
                // Request is authorized.
                req.user = token.user._id;
                next()
            })
            .catch(function (err) {
                // Request is not authorized.
                res.status(err.code || 500).json(err)
            });
    }
};
console.log("before route");
app.get("/", function(req, res){
    res.send("user microservice");
})
// require("./routes/user")(app, router);
require("./config/routes")(app, router);

app.listen(4000, () => {
    console.log("user microservice running on port 4000");
})

module.exports = app;