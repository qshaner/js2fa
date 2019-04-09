import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import * as emailjs from 'emailjs-com'
import NavBar from "./navbar";


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.sendCode= this.sendCode.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.checkUsernamePassword = this.checkUsernamePassword.bind(this)
}

  state = {
  email: "",
  username: "",
  password:"",
  message: "",
  usernameInput: "",
  passwordInput:"",
  emailInput:""
  };

emailChange(event){
    this.setState({email: event.target.value})
}

generateCode() {
    let temp = "";
    let digit;

    while(temp.length<6){
        digit = Math.floor(Math.random()*9);
        temp = temp + "" + digit;
    }
console.log("Code: ", temp)

return temp;
}

passwordChange(event){
    this.setState({password: event.target.value})
}

usernameChange(event){
    console.log("Username: ", event.target.value)
    this.setState({username: event.target.value})
}

checkUsernamePassword() {
    //If successful, go on to validate user
    //Else show error message, redirect to login

    //check this.state.username and this.state.password against given username/password

    let userActual = "Admin"
    let passActual = "1234"

    if(this.state.username === ""){
        this.setState({usernameInput: "Please input a username"})
    }
    else {
        this.setState({usernameInput: ""})
    }
    if(this.state.password === ""){
        this.setState({passwordInput: "Please input a username"})
    }
    else {
        this.setState({passwordInput: ""})
    }
    if(this.state.email === ""){
        this.setState({emailInput: "Please input a username"})
    }
    else {
        this.setState({emailInput: ""})
    }

    if((userActual === this.state.username && passActual === this.state.password)){
        console.log("Congratulations!")
        this.sendCode()
    }
    else if((this.state.username!=="" && this.state.password!=="")){
        console.log("Fail")
        this.setState({message: "Unable to Authenticate"})
    }
}

  sendCode(){
    //Change view from login into validation screen -> Redirect to validateLogin with the code
let generated = this.generateCode();
//Currently uses a predefined email, this is due to the prototype requiring 
//pre-authenticated email addresses. A company would not have this problem
var template_params = {
    "email": "solarblue.consulting@gmail.com",
    "code": generated
 }
 
 var service_id = "default_service";
 var template_id = "2fa_osu_cse4471";
 emailjs.send(service_id, template_id, template_params, "user_nJau5qJhnrxk85ncqs4Vk")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });


    this.props.history.push('/validate', {code: generated});
}

render() {
    console.log("this ", this)
    return (
        <div>
        <NavBar></NavBar>
      
           
            <div className="loginContainer">
            <div>
            {this.state.message &&
            <div className="Error">
                <p>{this.state.message}</p>
            </div>
            }
            <Form>
                <FormGroup>
                    <Label for="Email:">Email</Label><br/>
                    <Input onChange={this.emailChange} type="email" name="email" id="inputEmail" placeholder="Brutus.buckeye@osu.edu" required>
                    </Input>
                    <div className="input">
                    {this.state.emailInput}
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for="username" > Username:
                    </Label><br/>
                    <Input onChange={this.usernameChange} type="text" name="username" id="username" placeholder="Enter your username" required></Input>
                    <div className="input">
                    {this.state.usernameInput}
                    </div>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password:</Label><br/>
                    <Input onChange={this.passwordChange} type="password" name="password" id="password" placeholder="Keep this hidden!" required></Input>
                    <div className="input">
                    {this.state.passwordInput}
                    </div>
                </FormGroup>
            </Form>
            <Button className="btn" onClick ={this.checkUsernamePassword}>
                Send Code
            </Button>
            </div>
            </div>
            </div>
    )
}

}

export default withRouter(LoginPage);
