import React from 'react';
import { shallow } from 'enzyme';
import HelpPage from '../../components/HelpPage';

test('Should render Help Page', () => {
  const wrapper = shallow(<HelpPage />);
  expect(wrapper).toMatchSnapshot();
});
