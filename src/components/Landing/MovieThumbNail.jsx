import React, {Component} from 'react';
import {Thumbnail} from 'react-bootstrap';

class MovieThumbNail extends Component {
    render(){
        const movie = this.props.movie;
        const movie_url = 'movie/'+ movie.id;
        const poster_url = 'https://image.tmdb.org/t/p/w500' + movie.poster_path
        return (
            <Thumbnail src={poster_url}>
            <div>
                <a href={movie_url}>Movie: {movie.title}</a>
                <br />
                Summary: {movie.overview}
                <br/>
                Realeased on: {movie.release_date}
                <br/>
                Rating: {movie.vote_average}
                <br />
                <br />
            </div>
            </Thumbnail>
        )
    }
}

export default MovieThumbNail;