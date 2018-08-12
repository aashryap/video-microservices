let db = require("../models/index");

module.exports = {
    addUser : function(req, callback){
        let email = req.body.email;
        let password = req.body.password;
        let name = req.body.name;
        // let scope = [1];
        
        db["user"].create({name : name, email :email, password : password, scope : [1]})
        .then(user => {
            console.log("-------user-------", user);
            if(user.code === 11000)
            {

                callback(401, {status : 401, err : "user already exist", errDescription :user})            
            }
            else
            {
                callback(200, user)
            }
            
        })
        .catch(err => {
            console.log("errrr---------", err.code);
            callback(401, {status : 401, err : "user already exist", errDescription :user})
        })
    }
    
}