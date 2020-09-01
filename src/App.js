import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotMatched from './components/NotMached/NotMatched';
import CountryDetails from './components/CountryDetails/CountryDetails';


function App() {
 
  return (
    <Router>
      <Switch> 

        <Route path="/home">
          <Home/>
          </Route>

          <Route path="/detail/:name">
          <CountryDetails></CountryDetails>
          </Route>


          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NotMatched></NotMatched>
          </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
