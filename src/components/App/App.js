import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Home from '../Home/Home';
import Details from "../Details/Details";


class App extends Component {



  render() {
    return (<>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Sagas</h1>
        </header>

        <Router>
          <nav>
            <span className="linkContainer"> 
              <Link to="/">Home</Link>
              </span>
              <br></br>
              
            
          </nav>
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/details" component={Details} />
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
