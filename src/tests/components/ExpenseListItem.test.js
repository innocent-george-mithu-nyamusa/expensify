import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from './../../components/ExpenseListItem';
import expenses from './../fixtures/expenses';

test('Should render an Individual expense Item', () => {
  const expense = expenses[1];
  const wrapper = shallow(<ExpenseListItem {...expense} />);
  expect(wrapper).toMatchSnapshot();
});
