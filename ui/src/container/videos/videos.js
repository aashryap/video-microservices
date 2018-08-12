import React, {Component} from "react";
import axios from "axios";
import constants from "../../constants";
import Video from "./video/video";
import { withRouter } from 'react-router-dom'; 
import moment from "moment";
class VideoComponent extends Component {
    
    constructor(props) {
        super(props)
      }

    state = {
        videos : []
    }
    componentWillMount = () => {
        URL = constants.BASE_URL_VIDEO + "videosInfo"
        let authOptions = {
            method: 'GET',
            url: URL,
            headers: {
                'Authorization': 'Basic QUJDOkFCQzEyMw==',
                'Content-Type': 'application/json',
            }
          };
        axios(authOptions)
        .then((data) => {
            // localStorage.setItem("token", data.data.accessToken);
            // console.log(localStorage.getItem("token"));
            // console.log(data);
            this.setState({
                videos : data.data
            })
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    onClickHandler = (videoinfo) => {
        console.log("--------------localStorage-----------", localStorage.getItem('expirationTime'));
        console.log(moment(localStorage.getItem('expirationTime')).isBefore(moment()));
        console.log(localStorage.getItem("expirationTime") != null);
        if(localStorage.getItem("expirationTime") !== "" && !moment(localStorage.getItem('expirationTime')).isBefore(moment()))
        {
            this.props.history.push ({
                pathname : "/video/"+videoinfo._id,
                state : videoinfo
            })
        }
        else
        {
            this.props.history.push ({
                pathname : "/",
                state : {}
            })
        }
    }

    render(){
        return (
            <React.Fragment>
                <div style={{color : "white", fontSize:"30px",paddingBottom:"30px"}}><b>VIDEOS</b></div>
                <Video 
                    videos={this.state.videos}
                    onClickHandler = {(videoinfo) => this.onClickHandler(videoinfo)}
                    login = {this.props.login}
                />
            </React.Fragment>
        )
    }
    
}

 export default withRouter(VideoComponent);