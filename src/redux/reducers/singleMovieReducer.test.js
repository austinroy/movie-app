import singleMovieReducer from  './singleMovieReducer';

describe("Movies reducer",() =>{
    it("Should return initial state",()=>{
        const movie = {}
        expect(singleMovieReducer(undefined, {})).toEqual(movie)
    })
    it("should handle FETCH_MOVIES_SUCCESS", ()=>{
        const movie = {
            "adult": false,
            "backdrop_path": null,
            "belongs_to_collection": null,
            "budget": 0,
            "genres": [
            {
            "id": 16,
            "name": "Animation"
            },
            {
            "id": 35,
            "name": "Comedy"
            }
            ],
            "homepage": "",
            "id": 236427,
            "imdb_id": "tt0033166",
            "original_language": "en",
            "original_title": "The Timid Toreador",
            "overview": "The bull makes short work of the matador, and then turns on Porky, a tamale vendor who wanders into the ring accidentally. But then he makes the mistake of actually eating most of Porky's extra hot tamales.",
            "popularity": 0.081552,
            "poster_path": null,
            "production_companies": [
            {
            "name": "Warner Bros.",
            "id": 6194
            }
            ],
            "production_countries": [
            {
            "iso_3166_1": "US",
            "name": "United States of America"
            }
            ],
            "release_date": "1940-12-20",
            "revenue": 0,
            "runtime": 6,
            "spoken_languages": [],
            "status": "Released",
            "tagline": "",
            "title": "The Timid Toreador",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 2
            }
        
        const actionDispatched  = {
            type: 'FETCH_SINGLE_MOVIE_SUCCESS',
            movie
        }

        expect(singleMovieReducer({} ,actionDispatched)).toEqual(movie)
    })
})