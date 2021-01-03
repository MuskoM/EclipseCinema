import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import movies from './reducers/movieReducer'
import { connect, Provider } from 'react-redux';
import App from './containers/HomePageContainer';
import reportWebVitals from './reportWebVitals';

const store = createStore(movies)

const mapStateToProps = (state) =>{
  return {...state};
}

const mapDispatchToProps = (dispatch) => {
  return{
    showAllMovies: ()=> dispatch(
      {type: "SHOW_ALL_MOVIES"}),
    addMovie: (new_movie)=> dispatch(
      {type: "ADD_MOVIE",data:new_movie}),
    editMovie: (updated_movie,id)=> dispatch(
      {type: "EDIT_MOVIE",data:updated_movie,id:id})
  }
};

const ManageMovies = connect(mapStateToProps,mapDispatchToProps)(App);
ReactDOM.render(
    <Provider store={store}>
      <ManageMovies/>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
