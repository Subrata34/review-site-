import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About/About';
import Course from './Components/Course/Course';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>

          </Route>
          <Route path="/about">
            <About></About>

          </Route>
          <Route path="/course">
             <Course></Course>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
