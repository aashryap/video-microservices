import React from "react";
import image from "./image.jpg";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import {NavLink, Route, Switch } from "react-router-dom";
let Video = (props) => {
    console.log(props);
    let videos = props.videos.map(video => {
        return <div style={{display : "inline-block", padding : "20px", width:"500px",background : image}}>
                    <Card style={{boxShadow: '0 10px 6px -6px black', background: "#212121", color:"white"}}>
                        <CardImg top width="100px" src={image} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{video._id}</CardTitle>
                            <CardSubtitle>{video.category}</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            {props.login ? <Button onClick={() =>  props.onClickHandler(video) }>Watch</Button> : <span>please login to watch this video</span> }
                        </CardBody>
                    </Card>
                  
                </div>;
    });

    // let renderer = (
    //     <video controls autoplay poster={image}>
    //         <source src="http://localhost:4001/videos"  />
    //     </video>
    // )
    return videos;

}

export default Video;