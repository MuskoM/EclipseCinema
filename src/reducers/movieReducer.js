let movieList = [
    {
        title: "Harry Potter",
        author: "JK",
        year: 2012
    },
    {
        title: "Mission Impossible",
        author: "Tom Cruise",
        year: 2002,
    },
    {
        title: "Dark Knight",
        author: "Christopher Nolan",
        year:2016
    },
]

const getMovies=()=>{
    return movieList;
}

export default function movies(
  state = { movies : [], loaded: false }, action) {
    let new_state; 
    switch (action.type) { 
      case 'SHOW_ALL_MOVIES': 
        new_state = Object.assign({},state);
        new_state.movies = getMovies();
        new_state.loaded = true;
        return new_state;
      case 'ADD_MOVIE':
        let added_obj = Object.assign({}, state, { movies : [...state.movies, action.data] });
        console.log("why")
        console.log(added_obj);
        return added_obj;
      case 'EDIT_MOVIE':
        new_state = Object.assign({},state);
        new_state.movies[action.id] = action.data;
        return new_state;
      default: 
        return state 
    } 
  } 