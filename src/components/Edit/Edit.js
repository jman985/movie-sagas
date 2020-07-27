import React, { Component } from 'react';
import { connect } from 'react-redux';



class Edit extends Component {

    state = {
        id: this.props.reduxState.selectMovie,
        title : '',
        description : ''
        }
    
  
  
    componentDidMount(){
      console.log('edit did mount', this.props.reduxState.details[0].title)
    //   this.props.dispatch( { type: 'FETCH_DETAILS', payload: this.props.reduxState.selectMovie} );
      //dispatch to movies saga
      // this.props.dispatch( {type: 'FETCH_DETAILS'} );
    }
  
    handleChangeFor = (event, propertyName) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
            })
        
      }

    submitChanges = () => {

        this.props.dispatch( { type: 'SAVE_DETAILS', payload: {
            id: this.state.id,
            title: (this.state.title==='' ? this.props.reduxState.details[0].title : this.state.title),
            description: (this.state.description==='' ? this.props.reduxState.details[0].description : this.state.description),
          }})        
          
          this.props.history.push('/details/:id');
      
      }

      cancelClicked = () => {
        console.log('cancel changes clicked');
        this.props.history.push('/details/:id');
      
      }
    
      render() {
  
        return (
        
            <>
            <main>
            <h1>Edit Movie Info</h1>
              {this.props.reduxState.details.map((movie, index1)=>
                <>

                <h1 key={index1}>{movie.title}</h1>
                <input placeholder="Edit Title" type= "text" onChange={(event) => this.handleChangeFor(event, 'title')}
                value={this.state.title}/>

                <br></br>
                <br></br>
                <img src={movie.poster} alt= {movie.title} key={index1}/>
                <p key={index1}>{movie.description}</p>
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
    
    export default connect(putReduxStateOnProps)(Edit);