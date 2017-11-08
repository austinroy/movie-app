export const fetchSingleMovieSuccess = (movie) => {
    return {
        type: 'FETCH_SINGLE_MOVIE_SUCCESS',
        movie
    }
}

export const fetchMoviesSuccess = (movies) => {
    return {
        type: 'FETCH_MOVIES_SUCCESS',
        movies
    }
}


export const fetchSingleMovie = (url)=> dispatch => {
    fetch(url, {method: 'GET'}).then(resp =>{
        if(!resp.ok){
            return console.log('error making your request')
        } else {
            return resp.json();
        }
    }).then(json =>{
        return dispatch(fetchSingleMovieSuccess(json))
    })
}

export const  fetchMovies = (url) => dispatch => {
    fetch(url, {method: 'GET'})
    .then(resp =>{
        if(!resp.ok){
            console.log("Unable to fetch")
        } else {
            return resp.json()
        }
    }
    ).then(json =>{
        console.log(json);
        const results = json.results;
        return dispatch(fetchMoviesSuccess(results));
    }
    )
}