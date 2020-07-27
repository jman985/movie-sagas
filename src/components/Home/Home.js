import React, { Component } from "react";
import {connect} from 'react-redux';
import Movie from '../Movie/Movie';

class Home extends Component {

  componentDidMount(){
    console.log('home did mount');
    //dispatch to movies saga to get movie list
    this.props.dispatch( {type: 'FETCH_MOVIES'} );
  }


  render() {
    return (
    <>
      
      <div>
        <ul>
          {this.props.movieList.map(x =>
            <Movie key={x.id} thisMovie={x}/>
          )}
          
        </ul>
      </div>
     

    </>);
  }
}
const putReduxStateOnProps =(reduxState)=>({
  movieList: reduxState.movies
})
export default connect(putReduxStateOnProps)(Home);