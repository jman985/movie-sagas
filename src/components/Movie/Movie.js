import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Grid, Slide, Paper, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';



class Movie extends Component {


  movieClicked = () => {
    console.log("in movie poster for detailsClicked, id is", this.props.thisMovie.id);
    //dispatch movie id to selectMovie reducer
    this.props.dispatch({type: 'SELECT_MOVIE', payload: this.props.thisMovie.id})

  };

  state = { expanded: false,
        flipped: false
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  

    render() {

      return (
        <>
      <Grid item xs={8} sm={4} md={2}>

      <Card >
        <CardHeader title={this.props.thisMovie.title}>
        </CardHeader>
        <CardActionArea>
          <CardMedia  component="img" onClick={this.handleExpandClick} aria-expanded={this.state.expanded}
            aria-label="Show more"
            alt={this.props.thisMovie.title}
            src={this.props.thisMovie.poster}
            title={this.props.thisMovie.title}
          />
        </CardActionArea>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{this.props.thisMovie.description}</Typography>
              <Link color="inherit" to= "/details/:id">
                <Button variant="contained" color="primary" onClick = {this.movieClicked} size="small" color="primary">
                Select Movie
                </Button>
              </Link>
            </CardContent>
          </Collapse>
          </Card>
        </Grid>
                </>
      );
    }
  }
  


  const putReduxStateOnProps =(reduxState)=>({
    reduxState
  })
  
  export default connect(putReduxStateOnProps)(Movie);