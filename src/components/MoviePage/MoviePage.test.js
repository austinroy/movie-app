import {MoviePage} from './MoviePage';
import { render, configure } from 'enzyme';
import React, {Component} from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

function testSetup(){
    const props ={
        fetchMovie: jest.fn(),
        params : {
            id: 372058
        },
        movie : {
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
    };

    const wrapper = render(<MoviePage {...props} />);

    return {
        props,
        wrapper
    }
}

describe('Movie page',() =>{
    beforeEach(()=>{
         const fetchMovie = jest.fn().mockImplementation(()=>{
             return this.setState({movie: movie})
         });
    });
    it('Renders without crashing', () => {
        const { wrapper } = testSetup();
    });
    it('Have 4 page breaks', () => {
        const { wrapper, props} = testSetup();
        expect(wrapper.find('br')).toHaveLength(4);
    });
})