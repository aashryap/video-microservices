import React, {Component} from "react";
import "./videoDetail.css";
import image from "./image.jpg";
import axios from "axios";
import moment from "moment";


class VideoDetail extends Component{
    
 

    componentWillMount = () => {
        if(localStorage.getItem("expirationTime").length === 0 || moment(localStorage.getItem('expirationTime')).isBefore(moment()))
        {
            console.log("in if");
            this.props.history.push ({
                pathname : "/",
                state : {}
            })
        }
    }
    
    render(){
        let videoUrl = this.props.location.state.url+".mkv";
        let renderer = (
            <div className="VideoDetailSection">
                <video controls autoplay poster={image} width="70%">
                    <source src={"http://localhost:4001/videos?path="+videoUrl}  />
                </video>
                <div className="VideoDetailDescription">
                    <div><b>{this.props.match.params.id}</b></div>
                    <div><b>{this.props.location.state.category}</b></div>
                </div>        
            </div>
    
        )
        return renderer;
    }
    
}

export default VideoDetail;