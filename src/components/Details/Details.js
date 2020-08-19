import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';



class Details extends Component {

  state= {
    id: this.props.reduxState.selectMovie,
  }


  componentDidMount(){
    //get details from the database for selected movie
    console.log('Details did mount',this.props.match.params.id);
    this.props.dispatch( { type: 'FETCH_DETAILS', payload: this.props.match.params.id} );
    
  }

  homeClicked = () => {
    //go back to home page
    console.log("back to home Clicked");
    this.props.history.push('/');

  };

    editClicked = () => {
      //go to edit page
      console.log("back to home Clicked");
      this.props.history.push('/edit/' + this.props.match.params.id);

    };
  
    //render movie details
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
      <Button variant="contained" color="secondary" onClick= {this.homeClicked}>Back</Button>&nbsp;&nbsp;&nbsp;
      <Button variant="contained" color="primary" onClick= {this.editClicked}>Edit</Button>

        </main>
           
      
        </>
      );
    }
  }
  
  const putReduxStateOnProps =(reduxState)=>({
    reduxState
  })
  
  export default connect(putReduxStateOnProps)(withRouter(Details));