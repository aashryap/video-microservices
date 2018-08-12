let userController = require("../controller/user");
console.log("in user routes");
module.exports = function(app, router){
   

    router.route("/users")
    .post(function(req, res){
        console.log("-----in add user-----");
        userController.addUser(req, function(status, data){
            res.status(status).send(data);
        })
    })
    
}
