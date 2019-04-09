import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FrontPage from "./components/frontpage";
import LoginPage from "./components/loginpage";
import ValidateLogin from "./components/validatelogin";
import NavBar from "./components/navbar";


class App extends Component {
  constructor(props){
    super(props);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

state = {
  validated: false
}

isAuthenticated(returnedAuthentication){
  let authentication = returnedAuthentication;
  this.setState({validated: authentication})
}

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" render={props => <LoginPage />} />
              <Route exact path="/login" render={props => <LoginPage />} />
              <Route
                exact
                path="/validate"
                render={props => <ValidateLogin authenticated={this.isAuthenticated}/>}
              />
              <Route exact path="/content" render={props => <FrontPage authenticated={this.state.validated}/>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
