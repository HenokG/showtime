import { shallow } from 'enzyme';
import React from 'react';
import Movie from './';

describe('Testing Movie Component', () => {
  it('should render movie with title, genre and reviewScore', () => {
    const wrapper = shallow(
      <Movie title="Eternal" genre="superhero" reviewScore={4.8} />
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should not render genre', () => {
    const component = shallow(<Movie title="Dr. Strange" reviewScore={10} />);
    expect(component.find('small').exists()).toBe(false);
  });
});
