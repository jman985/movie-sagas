import React, { Component } from 'react';
import { connect } from 'react-redux';



class Details extends Component {


    detailsClicked = () => {
      console.log("in detailsClicked");
      this.props.history.push('/details');

      // this.props.dispatch({type: 'FETCH_DETAILS', payload: this.props.thisMovie.id})
    };
  
    render() {
      return (
        <>
        <main >

            <h1>this is the details page</h1>
        </main>
         
        </>
      );
    }
  }
  
  const putReduxStateOnProps =(reduxState)=>({
    reduxState
  })
  
  export default connect(putReduxStateOnProps)(Details);