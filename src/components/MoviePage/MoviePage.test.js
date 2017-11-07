import MoviePage from './MoviePage';
import { render, configure } from 'enzyme';
import React, {Component} from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

function testSetup(){
    const props ={
        params : {
            id: 372058
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