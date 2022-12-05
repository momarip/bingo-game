import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/combinedReducers';
//thunk => midel de redux pour reagir avec l'exterieur

// for this we'll use Redux "compose" function
const enhancers = compose(
    applyMiddleware(thunk), // your own middleware
    // window.devToolsExtension ? window._REDUX_DEVTOOLS_EXTENSION_() : (f) => f
);// devtools middleware

export let store = createStore(rootReducer, enhancers);