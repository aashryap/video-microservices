module.exports = function(app, router){
    require("../routes/video")(app, router);
    app.use(router);
}