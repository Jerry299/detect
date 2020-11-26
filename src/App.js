import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact>
          <LandingPage/>
        </Route>
      </Switch>

    </Router>
  );
};

export default App;