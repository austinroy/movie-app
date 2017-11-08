import React, { Component } from 'react';
import {Thumbnail} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class MoviePage extends Component {
    constructor(props){
        super(props);
        this.state ={
            movie: {}
        }
    }
    
    componentDidMount(props){
        const movie_id = this.props.match.params.id;
        const movie_url = 'https://api.themoviedb.org/3/movie/'+ movie_id + '?api_key=6b9df51850c433dbbb1a5dd460afb693&language=en-US';
        this.props.fetchSingleMovie(movie_url);
    }

    render (){
        const {movie} = this.props;
        console.log(movie);
        const poster_url = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
        return(
            <div className="container">
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
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    movie: state.movie
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);