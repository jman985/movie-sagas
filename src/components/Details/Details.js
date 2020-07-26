import React, { Component } from 'react';
import { connect } from 'react-redux';



class Details extends Component {


  componentDidMount(){
    console.log('home did mount');
    //dispatch to movies saga
    this.props.dispatch( {type: 'FETCH_MOVIES'} );

  }

  
    detailsClicked = () => {
      console.log("in detailsClicked");

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