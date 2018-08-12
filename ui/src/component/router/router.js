import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../container/homePage/homePage"
import VideoDetail from "../../container/videoDetail/videoDetail";

let RouterComponent = (props) => {
    return(
        <Switch> 
            <Route path="/" exact component={HomePage} /> 
            <Route path="/video/:id" exact component={VideoDetail} />
        </Switch>
    )
}

export default RouterComponent;