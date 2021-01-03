const SHOW_ALL_MOVIES = "SHOW_ALL_MOVIES";
const ADD_MOVIE = "ADD_MOVIE";
const EDIT_MOVIE = "EDIT_MOVIE";
const DELETE_MOVIE = "DELETE_MOVIE";
const BUY_TICKET = "BUY_TICKET";


export const showAllMovies=()=>{
    {
        type: SHOW_ALL_MOVIES
    }
}

export const addMovie=(new_movie=>(
    {
        type: ADD_MOVIE,
        new_movie
    }
));

export const editMovie=(updated_movie =>(
    {
        type: EDIT_MOVIE,
        updated_movie
    }
));

export const deleteMovie=(deleted_movie=>(
    {
        type: DELETE_MOVIE,
        deleted_movie
    }
));

export const buyTicket=(bought_ticket=>(
    {
        type: BUY_TICKET,
        bought_ticket
    }
));