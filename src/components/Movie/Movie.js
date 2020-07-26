import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Movie extends Component {

  detailsClicked = () => {
    console.log("in detailsClicked");

    // this.props.dispatch({type: 'FETCH_DETAILS', payload: this.props.thisMovie.id})
  };
  
    render() {
      return (
        <>
        <main className = 'poster'>
        <br></br>

        <Link to = "/details">
          <img src={this.props.thisMovie.poster} onClick = {this.detailsClicked} alt= {this.props.thisMovie.title}/>
          </Link>

          <br></br>
        </main>
         
        </>
      );
    }
  }
  
  const putReduxStateOnProps =(reduxState)=>({
    reduxState
  })
  
  export default connect(putReduxStateOnProps)(Movie);