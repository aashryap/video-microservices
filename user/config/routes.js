console.log("inroutes")
const express = require('express');
module.exports = (app, router) => {
    require("../routes/oauth.js")(app, router);
    require("../routes/user.js")(app, router);
    app.use(express.static('media'));
    app.use(router);
}