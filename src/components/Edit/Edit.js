import React, { Component } from 'react';
import { connect } from 'react-redux';



class Edit extends Component {

    
  
  
    componentDidMount(){
      console.log('edit did mount',this.state.id);
  
      //dispatch to movies saga
      // this.props.dispatch( {type: 'FETCH_DETAILS'} );
    }
  
    
  
      
    
      render() {
  
        return (
        
          <main >
              <h1>this is the edit page</h1>
          </main>
             
        
          
        );
      }
    }
    
    const putReduxStateOnProps =(reduxState)=>({
      reduxState
    })
    
    export default connect(putReduxStateOnProps)(Edit);