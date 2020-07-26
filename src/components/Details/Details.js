import React, { Component } from 'react';
import { connect } from 'react-redux';



class Details extends Component {

  state= {
    id: this.props.reduxState.selectMovie,
  }


  componentDidMount(){
    console.log('Details did mount',this.state);
   
    //dispatch to movies saga
    // this.props.dispatch( {type: 'FETCH_DETAILS'} );

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