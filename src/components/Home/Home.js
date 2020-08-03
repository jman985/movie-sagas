import React, { Component } from "react";
import {connect} from 'react-redux';
import Movie from '../Movie/Movie';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Box, Grid, Slide } from '@material-ui/core';


class Home extends Component {

  componentDidMount(){
    console.log('home did mount');
    //dispatch to movies saga to get movie list
    this.props.dispatch( {type: 'FETCH_MOVIES'} );
  }


  render() {
    const {classes} = this.props;

    return (
      
      <Grid 
      container
      spacing={10}
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
          {this.props.movieList.map(x =>
            <Movie key={x.id} thisMovie={x}/>
          )}
    </Grid>
    );
  }
}
const putReduxStateOnProps =(reduxState)=>({
  movieList: reduxState.movies
})
export default connect(putReduxStateOnProps)(Home);