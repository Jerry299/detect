import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'
import FaceDetect from './components/FaceDetect'
import VehicleDetect from './components/VehicleDetect'
import Demographics from './components/Demographics'

import Clarifai from 'clarifai';
const app = new Clarifai.App({
  apiKey: "afd09cae99254c9b80795f6ece7ee0b5"
})


const App = () => {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/face" exact>
          <FaceDetect clarifai={app}/>
        </Route>
        <Route path="/vehicle" exact>
          <VehicleDetect clarifai={app}/>
        </Route>
        <Route path="/demo" exact>
          <Demographics clarifai={app}/>
        </Route>
      </Switch>

    </Router>
  );
};

export default App;