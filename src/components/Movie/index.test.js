import renderer from 'react-test-renderer';
import React from 'react';
import Movie from './';

describe('Testing Movie Component', () => {
	it('should render given title, genre and reviewScore', () => {
		const movie = {title: 'Eternals', genre: 'action', reviewScore: 9.9};
		const component = renderer.create(<Movie {...movie}/>);
		expect(component.toJSON()).toMatchSnapshot();
	})
})