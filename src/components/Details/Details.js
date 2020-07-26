import React, { Component } from 'react';
import { connect } from 'react-redux';



class Details extends Component {

  state= {
    id: this.props.reduxState.selectMovie,
  }


  componentDidMount(){
    console.log('Details did mount',this.state.id);
    this.props.dispatch( { type: 'FETCH_DETAILS', payload: this.state} );
    //dispatch to movies saga
    // this.props.dispatch( {type: 'FETCH_DETAILS'} );
  }

  // getDetails = () => {
  //   console.log(this.props.match.params.id);
    
  //   console.log(this.props.reduxState);
  // }

    homeClicked = () => {
      console.log("back to home Clicked");
      this.props.history.push('/');

      // this.props.dispatch({type: 'FETCH_DETAILS', payload: this.props.thisMovie.id})
    };
  
    render() {

      return (
      <>
        <main >

          {this.props.reduxState.details.map((movie, index1)=>
          <>
          <h1 key={index1}>{movie.title}</h1>
          <img src={movie.poster} alt= {movie.title} key={index1}/>
            {movie.genres.map((genre,index2)=>
              <h3 key={index2}>{genre}</h3>
              
            )}
            <p key={index1}>{movie.description}</p>
            </>
          )}
      <button onClick= {this.homeClicked}>Back to Home</button>
        </main>
           
      
        </>
      );
    }
  }
  
  const putReduxStateOnProps =(reduxState)=>({
    reduxState
  })
  
  export default connect(putReduxStateOnProps)(Details);