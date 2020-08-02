import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Home from '../Home/Home';
import Details from "../Details/Details";
import Edit from '../Edit/Edit';
import { Box, Grid, Slide, Paper, Typography} from '@material-ui/core';


class App extends Component {



  render() {
    return (
    <>
      <div className="App">
      <Router>
        <header className="App-header">
          <h1 className="App-title">Movie Sagas</h1>
          <br></br>
          <br></br>

          <nav>
            <span className="linkContainer"> 
              <Link color="primary" to="/">Home</Link>
              </span>
              
          </nav>
        </header>

       
          
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/details/:id" component={Details} />
            <Route path="/edit/:id" component={Edit} />

          </main>
        </Router>

      </div></>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
});

export default connect(putReduxStateOnProps)(App);
