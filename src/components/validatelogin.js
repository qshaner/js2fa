import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import NavBar from "./navbar";

class ValidateLogin extends Component {
  constructor(props) {
    super(props);
  this.checkValidation = this.checkValidation.bind(this);
  this.changeValidation = this.changeValidation.bind(this);
 // this.props.isAuthenticated(this.checkIfAuthenticated())
}

  state = {
    enteredCode: "",
    code: this.props.location.state.code.toString(),
    message: ""
  };

//checkIfAuthenticated() {
//return true;
//}

  changeValidation(event){
      this.setState({enteredCode: event.target.value})
  }

checkValidation() {
    //Causes it to change the code/invalidate the code after 10 minutes
    if(this.state.code === this.state.enteredCode.toString()){
        console.log("Validated!")
        this.setState({message: ""})
        //clearTimeout(timer)
        //We're ensuring the page doesn't rerender without need
        this.props.history.push("/content");
}
else {
let timer = setTimeout(this.timeElapsedChangeCode(), 600000)
}
}

timeElapsedChangeCode() {
    let newCode = this.generateCode();
    this.setState({code: newCode});
    alert ("Code is no longer Valid!")

    this.props.history.push("/login")
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

render() {
    return (
        <div>
        <NavBar></NavBar>
        <div className="validationContainer">
            {this.state.message &&
            <div className="Error">
                <h1>{this.state.message}</h1>
            </div>
            }
            <Form>
                <FormGroup>
                    <Label for="validate">Enter Code:</Label>
                    <Input onChange={this.changeValidation} type="text" name="code" id="code">
                    </Input>       
                </FormGroup>
                <br/>
                <Button onClick={this.checkValidation}>Validate</Button>
            </Form>
        </div>
        </div>
    )
}

}

export default withRouter(ValidateLogin);
