import React, { Component } from 'react';
import MovieThumbaNail from './MovieThumbNail';

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: 'https://api.themoviedb.org/3/discover/movie?api_key=6b9df51850c433dbbb1a5dd460afb693&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000',
            movies: [],
            searchYear: '',
        }
        this.fetchMovies = this.fetchMovies.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    } 

    componentDidMount(){
        const {url} = this.state;
        this.fetchMovies(url);
    }

    fetchMovies(url){
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
            this.setState({movies: results})
        }
        )
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
        const {movies} = this.state;
        return movies.map((movie, index) => {
            return (<MovieThumbaNail key={index} movie={movie} />)
        })    
    }

    render(){
        return(
            <div className='container'>
             This is the LandingPage
             <form onSubmit={this.handleSubmit}>
                <input type='search' placeholder='Enter movie year' onChange={this.handleChange}/>
             </form>
             {this.mapMoviesToThumb()}
            </div>
        )
    }
}

export default LandingPage;