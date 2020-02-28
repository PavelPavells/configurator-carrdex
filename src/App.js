import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import Turnstile from "./components/Turnstile/Turnstile";
import Barrier from "./components/Barrier/Barrier";
import './App.scss';
import Popup from './components/Popup/Popup';

//****************** APP COMPONENTS ******************//

class App extends Component {

  render() {
    return (
      <Router>
        <div className="wrapper-configurator">
          <Switch>
            <Route exact path={`/popup`} render={props => <Popup />} />
            <Route exact path={`/main`} render={props => <Main />} />
            <Route exact path={`/turnstile/:model?`}  render={props => <Turnstile />} />
            <Route exact path={`/barrier/:model?`} render={props => <Barrier />} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;