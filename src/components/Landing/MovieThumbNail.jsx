import React, {Component} from 'react';

class MovieThumbNail extends Component {
    render(){
        const movie = this.props.movie;
        const movie_url = 'movie/'+ movie.id;
        return (
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
        )
    }
}

export default MovieThumbNail;