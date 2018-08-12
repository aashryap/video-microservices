let videoController = require("../controllers/video");
module.exports = function(app, router) {
    router.route("/videos")
    .get(function(req, res){
        videoController.getVideos(req, res,function(status, data){
            // res.status(status).send(data);
            console.log(status);
            console.log(data);
        })
    })

    router.route("/videos")
    .get(function(req, res){
        videoController.getVideosById(req, res,function(status, data){
            // res.status(status).send(data);
            console.log(status);
            console.log(data);
        })
    })

    router.route("/videos")
    .post(function(req, res){
        console.log("in posst video");
        videoController.addVideo(req, function(status, data){
            res.status(status).send(data);
        })  
    })

    router.route("/videos/:videoId")
    .get(function(req, res){
        videoController.getVideoById(req, function(status, data){
            res.status(status).send(data);
        })
    })

    router.route("/videosInfo/")
    .get(function(req, res){
        videoController.getAllVideosInfo(req, function(status, data){
            res.status(status).send(data);
        })
    })

}