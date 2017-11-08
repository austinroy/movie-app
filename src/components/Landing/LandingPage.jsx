import React, { Component } from 'react';
import MovieThumbaNail from './MovieThumbNail';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: 'https://api.themoviedb.org/3/discover/movie?api_key=6b9df51850c433dbbb1a5dd460afb693&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000',
            movies: [],
            searchYear: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    } 

    componentDidMount(){
        const {url} = this.state;
        this.props.fetchMovies(url);
    }


    handleChange(event){
        const year = event.target.value;
        this.setState({searchYear: year})
    }

    handleSubmit(event){
        event.preventDefault();
        const {searchYear, url} = this.state;
        if(searchYear != ''){
            const newUrl = url + '&primary_release_year=' + searchYear;
            this.setState({url : newUrl});
            this.fetchMovies(this.state.url);
        }
    }

    mapMoviesToThumb (){
        const {movies} = this.props;
        return movies.map((movie, index) => {
            return (<MovieThumbaNail key={index} movie={movie} />)
        })    
    }

    render(){
        return(
            <div className='container'>
             <form onSubmit={this.handleSubmit}>
                <input type='search' placeholder='Enter movie year' onChange={this.handleChange}/>
             </form>
             <br />
             {this.mapMoviesToThumb()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    movies: state.movies
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (LandingPage);