import LandingPage from './LandingPage';
import { render, configure } from 'enzyme';
import React, {Component} from 'react';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

function testSetup(){

    const wrapper = render(<LandingPage />);

    return {
        wrapper
    }
}

describe('Landing page',() =>{
    beforeEach(()=>{
         const fetchMovie = jest.fn().mockImplementation(()=>{
             return this.setState({movie: movie})
         });
    });
    it('Renders without crashing', () => {
        const { wrapper } = testSetup();
    });
})