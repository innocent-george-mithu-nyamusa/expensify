import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from './../../components/EditExpensePage';
import expenses from './../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
    />
  );
});

test('Should render edit expense page', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should handle edit expense', () => {
  const expense = wrapper.find('ExpenseForm').props('expenses');
  wrapper.find('ExpenseForm').props('onSubmit')(expense);
  expect(history).toHaveBeenCalledLastWith('/');
  expect(wrapper).toHaveBeenCalledLastWith(expense.id, expense);
});

test('Should handle remove expense', () => {
  const id = expenses[1].id;
  wrapper.find('button').simulate('click')();
  expect(history).toHaveBeenCalledLastWith('/');
  expect(removeExpense).toHaveBeenCalledLastWith({ id });
});
