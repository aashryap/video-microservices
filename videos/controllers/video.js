let db = require("../models/index");
let fs = require("fs");

module.exports = {
    getVideos : function(req,res, callback){
        console.log("---------",req.query);
        let srcUrl = req.query.path;
        let src = fs.createReadStream("./"+srcUrl);        
        src.pipe(res);
        callback(200, "all videos");
    },

    getVideoById : function(req, res, callback){
        console.log("---------",req.query);
        let srcUrl = req.query.url;
        let src = fs.createReadStream(srcUrl);
        src.pipe(res);
    },

    addVideo : function(req, callback){
        console.log("-------body------", req.body);
        let videoname = req.body.videoName;
        let category = req.body.category;
        let url = req.body.url;
        db['video'].create({
            name : videoname,
            category : category,
            url : url
        })
        .then((video) => {
            console.log("----- added video------", video);
            callback(200, video);
        })
        .catch(err => {
            console.log(err);
            callback(500, err);
        })
    },

    getVideoById : function(req, callback){
        let id = req.params.videoId;
        db['video'].findById(id)
        .then(video => {
            console.log("------video------", video);
            callback(200, video);
        })
        .catch(err => {
            console.log(err);
            callback(500, err);
        })
    },

    getAllVideosInfo : function(req, callback){
        
        db['video'].find()
        .then(videos => {
            console.log("------videos------", videos);
            callback(200, videos);
        })
        .catch(err => {
            console.log(err);
            callback(500, err);
        })
    }
}