import MovieThumbNail from './MovieThumbNail';
import { shallow, configure } from 'enzyme';
import React, {Component} from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

function testSetup(){
    const props ={
        movie: {
            "adult": false,
            "backdrop_path": "/7OMAfDJikBxItZBIug0NJig5DHD.jpg",
            "belongs_to_collection": null,
            "budget": 0,
            "genres": [
              {
                "id": 10749,
                "name": "Romance"
              },
              {
                "id": 16,
                "name": "Animation"
              },
              {
                "id": 18,
                "name": "Drama"
              }
            ],
            "homepage": "https://www.funimationfilms.com/movie/yourname/",
            "id": 372058,
            "imdb_id": "tt5311514",
            "original_language": "ja",
            "original_title": "君の名は。",
            "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
            "popularity": 71.414467,
            "poster_path": "/xq1Ugd62d23K2knRUx6xxuALTZB.jpg",
            "production_companies": [
              {
                "name": "CoMix Wave Films",
                "id": 10198
              }
            ],
            "production_countries": [
              {
                "iso_3166_1": "JP",
                "name": "Japan"
              }
            ],
            "release_date": "2016-08-26",
            "revenue": 354526712,
            "runtime": 106,
            "spoken_languages": [
              {
                "iso_639_1": "ja",
                "name": "日本語"
              }
            ],
            "status": "Released",
            "tagline": "",
            "title": "Your Name.",
            "video": false,
            "vote_average": 8.5,
            "vote_count": 1168
          },

    };

    const wrapper = shallow(<MovieThumbNail {...props} />);

    return {
        props,
        wrapper
    }
}

describe('Movie Thumbnail',() =>{
    it('Renders without crashing', () => {
        const { wrapper, props } = testSetup();
        expect(wrapper.find('div')).toHaveLength(1);
    });
    it('Have 4 page breaks', () => {
        const { wrapper, props} = testSetup();
        expect(wrapper.find('br')).toHaveLength(4);
    });
    it('Has expected movie in props', () =>{
         const { wrapper, props} = testSetup();
         expect(wrapper.instance().props.movie).toEqual(props.movie);
    });
});