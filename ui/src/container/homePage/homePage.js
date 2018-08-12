import React, {Component} from "react";
import "./homePage.css";
import ModalComponent from "../../component/UI/modal";
import {Button } from "reactstrap";
import constants from "../../constants";
import axios from "axios";
import qs from "qs";
import VideoComponent from "../videos/videos";
import moment from "moment";
class HomePage extends Component {

        state = {   
            modalOpen : false,
            modalType : 1, // 2 for signup 1 for sign in
            email : "",
            password : "",
            login : false
        }

        componentWillMount = () => {
            let expirationTime = localStorage.getItem("expirationTime");
            console.log("------expiration time--------", expirationTime.length);
            console.log("------expiration time--------",typeof expirationTime);
            if(expirationTime.length !== 0)
            {
                console.log(moment(expirationTime).isBefore(moment()));    
                if(moment(expirationTime).isBefore(moment()))
                {
                    this.setState({
                        login : false
                    })
                    localStorage.setItem("token", "");
                    localStorage.setItem("expirationTime", "");
                }
                else
                {
                    this.setState({
                        login : true
                    })
                }
            }
            else
            {
                this.setState({
                    login : false
                })
            }
        }

        logout = () =>{
            localStorage.setItem("expirationTime","");
            localStorage.setItem("token", "");
            this.setState({
                login : false
            })
        }

        toggleModal = (value, modalType) => {
            console.log("in toggle modal");
            this.setState({
                modalOpen : value,
                modalType : modalType===null ? 1 : modalType
            })
        }

        onChangeHandler = (event, type) => {
            console.log(event.target.value);
            this.setState({
                [type] : event.target.value
            })
        }

        submitHandler = (event, type) => {
            //2 urls
            event.preventDefault();
            console.log("-----type-----", type);
            let URL ;
            let authOptions = {};
            if(type === 1)
            {
                URL = constants.BASE_URL_USER + "login"
                authOptions = {
                    method: 'POST',
                    url: URL,
                    data : qs.stringify({
                        username: this.state.email,
                        password: this.state.password,
                        grant_type: "password",
                        scope : 1
                    }),
                    headers: {
                        'Authorization': 'Basic QUJDOkFCQzEyMw==',
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
               
                  };
            }
            else
            {
                URL = constants.BASE_URL_USER + "users"
                authOptions = {
                    method: 'POST',
                    url: URL,
                    data : {
                        email: this.state.email,
                        password: this.state.password
                    },
                    headers: {
                        'Authorization': 'Basic QUJDOkFCQzEyMw==',
                        'Content-Type': 'application/json',
                    }
               
                  };
            }
            console.log("----url-----", URL);
           
            axios(authOptions)
            .then((data) => {
                console.log(data);
                if(type === 1 )
                {
                    localStorage.setItem("token", data.data.accessToken);
                    localStorage.setItem("expirationTime", data.data.accessTokenExpiresAt);
                    this.setState({
                        login : true
                    })
                }
                else
                {
                    console.log(data);
                }
                
            })
            .catch(err => {
                console.log(err);
            })
            
            this.setState({
                modalOpen : false
            })
        }

        render(){
            
            let renderer = (
            <React.Fragment>
                 <ModalComponent 
                        isOpen = {this.state.modalOpen}
                        toggle = {(value) => this.toggleModal(value, null)}
                        modalType = {this.state.modalType}
                        email = {this.state.email}
                        password = {this.state.password}
                        onChangeHandler = { (event, type) => this.onChangeHandler(event, type) }
                        submitHandler = { (event, type) => this.submitHandler(event, type) }
                />
                <div className="HeadingTextStyle">
                    A simple project to demonstrate the microservices architecture and deploying the microservices in Docker container
                    <hr />
                </div>
                  
                <div className="LoginSection">
                  { this.state.login ? 
                        <Button onClick={() => this.logout()} outline color="">LOGOUT</Button> : 
                        <React.Fragment>
                        <Button onClick={() => this.toggleModal(true, 1)} outline color="">
                            SIGNIN 
                        </Button>
                                {" "}
                        <Button onClick={() => this.toggleModal(true, 2)} outline color="">
                            SIGNUP 
                        </Button>
                        </React.Fragment> 
                   }
                </div>

                <div className="VideoSection">
                     <VideoComponent 
                        login = {this.state.login}
                     />
                </div>
            </React.Fragment>
            )
            return renderer;
        }

}

export default HomePage;