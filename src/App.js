import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import Turnstile from "./components/Turnstile/Turnstile";
import Barrier from "./components/Barrier/Barrier";
import './App.scss';
import PopupEp from './components/popup-ep/popup-ep';
import PopupEmmarin from './components/popup-emmarin/popup-emmarin';
import PopupMifare from './components/popup-mifare/popup-mifare';
import PopupBio from './components/popup-bio/popup-bio';
import PopupTime from './components/popup-time/popup-time';
import PopupSingleVisit from './components/popup-single-visit/popup-single-visit';
import PopupGuest2D from './components/popup-guest2d/popup-guest2d';
import PopupSteelCase from './components/popup-steel-case/popup-steel-case';

//****************** APP COMPONENTS ******************//

class App extends Component {

  render() {
    return (
      <Router>
        <div className="wrapper-configurator">
          <Switch>
            <Route exact path={`/popup-ep`} render={props => <PopupEp />} />
            <Route exact path={`/popup-emmarin`} render={props => <PopupEmmarin />} />
            <Route exact path={`/popup-mifare`} render={props => <PopupMifare />} />
            <Route exact path={`/popup-bio`} render={props => <PopupBio />} />
            <Route exact path={`/popup-time`} render={props => <PopupTime />} />
            <Route exact path={`/popup-single-visit`} render={props => <PopupSingleVisit />} />
            <Route exact path={`/popup-guest2d`} render={props => <PopupGuest2D />} />
            <Route exact path={`/popup-steel-case`} render={props => <PopupSteelCase />} />
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