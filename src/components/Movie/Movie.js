import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Movie extends Component {


  movieClicked = () => {
    console.log("in movie poster for detailsClicked");
    this.props.dispatch({type: 'SELECT_MOVIE', payload: this.props.thisMovie.id})
    // this.props.history.push('/details/:' + this.props.thisMovie.id);

  };
  
    render() {
      return (
        <>
        <main className = 'poster'>
        <br></br>

        <Link to = "/details/:id">
          <img src={this.props.thisMovie.poster} onClick = {this.movieClicked} alt= {this.props.thisMovie.title}/>
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