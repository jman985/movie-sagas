import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



class Edit extends Component {

    //set movie id to selected movie
    state = {
        id: this.props.match.params.id,
        title : '',
        description : ''
        }
    
  
    componentDidMount(){
      //confirm mount, reduxState
      this.props.dispatch( { type: 'FETCH_DETAILS', payload: this.props.match.params.id} );
    }
  
    handleChangeFor = (event, propertyName) => {
      //handle changes to title, description inputs
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
            })
        
      }

    submitChanges = () => {

      // submit/dispatch any title and/or description changes
        this.props.dispatch( { type: 'SAVE_DETAILS', payload: {
            id: this.state.id,
            title: (this.state.title==='' ? this.props.reduxState.details[0].title : this.state.title),
            description: (this.state.description==='' ? this.props.reduxState.details[0].description : this.state.description),
          }})        
          //go back to details page after submit
          this.props.history.push('/details/' + this.props.match.params.id);
      
      }

      cancelClicked = () => {
        console.log('cancel changes clicked');

        //go back to details page on cancel click
        this.props.history.push('/details/' + this.props.match.params.id);
      
      }
    
      render() {
  
        return (
        
            <>
            <main>
              {this.props.reduxState.details.map((movie, index1)=>
                <>

                <h1 key={index1}>{movie.title}</h1>
                <input placeholder="Edit Title" type= "text" onChange={(event) => this.handleChangeFor(event, 'title')}
                value={this.state.title}/>

                <br></br>
                <br></br>
                <img src={movie.poster} alt= {movie.title} key={index1}/>
                <p style={{margin: 'auto'}} key={index1}>{movie.description}</p>
                </>

             )}
              
              <textarea placeholder="Edit Description" type = "text" onChange={(event) => this.handleChangeFor(event, 'description')}
                value={this.state.description} />
                <br></br>
                <br></br>
                <br></br>

                <button onClick= {this.cancelClicked}>Cancel</button>
                <button onClick={this.submitChanges} disabled = {this.state.title===''&&this.state.description===''}>Submit Changes</button>
                

            </main>
               
            </>
             
        );
      }
    }
    
    const putReduxStateOnProps =(reduxState)=>({
      reduxState
    })
    
    export default connect(putReduxStateOnProps)(withRouter(Edit));