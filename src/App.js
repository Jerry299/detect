import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'
import FaceDetect from './components/FaceDetect'

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact>
          <LandingPage/>
        </Route>
        <Route path="/face" exact>
          <FaceDetect/>
        </Route>
      </Switch>

    </Router>
  );
};

export default App;