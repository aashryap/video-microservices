import React from "react";
import {Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

let Registration = (props) => {

    let renderer = (
        <Form>
            <FormGroup>
                <Label for="Email">Email</Label>
                <Input 
                    type="email" 
                    name="email" 
                    id="Email" 
                    placeholder="email" 
                    onChange={(event) => props.onChangeHandler(event, "email")} />
            </FormGroup>
            <FormGroup>
                <Label for="Password">Password</Label>
                <Input 
                    type="password" 
                    name="password" 
                    id="Password" 
                    placeholder="password" 
                    onChange={(event) => props.onChangeHandler(event, "password")}/>
            </FormGroup>
            <Button onClick={(event) => props.submitHandler(event, props.modalType)}>Submit</Button>
        </Form>
    )

    return renderer;

}

export default Registration;