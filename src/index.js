import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios'; 
// end imports

// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', getMovieSaga);
    yield takeEvery('FETCH_DETAILS', getDetailsSaga);

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

function* getMovieSaga(){
    try{

        const response = yield axios.get ('/movies')
        yield put ({type: 'SET_MOVIES', payload: response.data});
    } catch (error){
        console.log('error with movies get request:', error);
    };//end axios
}//end getMovieSaga


function* getDetailsSaga(action){
    try{
        console.log('querying with', action.payload.id);
        
        const response = yield axios.get ('/details/' + action.payload.id)
        yield console.log('This is what we get from axios.get: ', response.data);

        yield put ({type: 'SET_DETAILS', payload: response.data});
    } catch (error){
        console.log('error with genres get request:', error);
    };//end axios
}//end getGenresSaga


// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie clicked 
const selectMovie = (state = [], action) => {
        switch (action.type) {
            case 'SELECT_MOVIE':
                return action.payload;
            default:
                return state;
        }
    }

// Used to store the movie genres
const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        details,
        selectMovie  
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
