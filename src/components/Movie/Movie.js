import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Movie extends Component {


  
    render() {
      return (
        <>
        <main className = 'poster'>
        <Link to = "/details">
          <img src={this.props.thisMovie.poster} onClick = {this.detailsClicked} alt= {this.props.thisMovie.title}/>
          </Link>
        </main>
         
        </>
      );
    }
  }
  
  const putReduxStateOnProps =(reduxState)=>({
    reduxState
  })
  
  export default connect(putReduxStateOnProps)(Movie);