import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'
import FaceDetect from './components/FaceRecognition/FaceDetect'
import VehicleDetect from './components/VehicleRecognition/VehicleDetect'
import Demographics from './components/DemoRecognition/Demographics';

import Clarifai from 'clarifai';

const key = process.env.REACT_APP_API_KEY
const app = new Clarifai.App({
  apiKey: key
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