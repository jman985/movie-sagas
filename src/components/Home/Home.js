import React, { Component } from "react";
import {connect} from 'react-redux';
import Movie from '../Movie/Movie'


class Home extends Component {

  componentDidMount(){
    console.log('home did mount');
    //dispatch to movies saga
    this.props.dispatch( {type: 'FETCH_MOVIES'} );
    this.props.dispatch({type: 'FETCH_GENRES'});

  }

//   getPizza = () =>{
//     Axios
//     .get('/api/pizza')
//     .then((response)=>{
//       console.log(response.data);
//       this.props.dispatch({type: 'PIZZA_LIST' , payload: response.data})
//     }).catch((err)=>{
//       console.log(err);
//       alert('in get of home')
//     })
//   }

 

  render() {
    return (
    <>
      
      <div>
        <ul>
          {/* {JSON.stringify(this.props)} */}
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