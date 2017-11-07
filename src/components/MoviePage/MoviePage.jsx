import React, { Component } from 'react';
import {Thumbnail} from 'react-bootstrap';

class MoviePage extends Component {
    constructor(props){
        super(props);
        this.state ={
            movie: {}
        }
        this.fetchMovie = this.fetchMovie.bind(this);
    }
    
    componentDidMount(props){
        const movie_id = this.props.params.id;
        const movie_url = 'https://api.themoviedb.org/3/movie/'+ movie_id + '?api_key=6b9df51850c433dbbb1a5dd460afb693&language=en-US'
        this.fetchMovie(movie_url);
    }

    fetchMovie(url){
        fetch(url, {method: 'GET'}).then(resp =>{
            if(!resp.ok){
                return console.log('error making your request')
            } else {
                return resp.json();
            }
        }).then(json =>{
            this.setState({movie : json})
        })
    }

    render (){
        const {movie} = this.state;
        console.log(movie);
        const poster_url = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        return(
            <Thumbnail src={poster_url}>
            <div>
                Movie Name: {movie.title}
                <br/>
                Status: {movie.status}
                <br/>
                HomePage: <a href={movie.homepage}>{movie.homepage}</a>
                <br/>
                Plot Summary: {movie.overview}
                <br/>
                Rating: {movie.vote_average}
            </div>
            </Thumbnail>
        )
    }
}

export default MoviePage;