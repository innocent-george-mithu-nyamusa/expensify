import moment from 'moment';
import expensesReducer from './../../reducers/expenses';
import expenses from './../fixtures/expenses';

test('Should setup the default expenses array', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove an expense by id ', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[5],
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    expenses[0],
    expenses[1],
    expenses[2],
    expenses[3],
    expenses[4],
    expenses[6],
    expenses[7],
  ]);
});

test('should remove an expense if id is not found ', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-9',
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense to the array', () => {
  expense = {
    id: '123',
    description: 'Stuff',
    note: 'Dinners Outings Travelling time Patience emotions Money Freedoms',
    amount: 999999,
    createdAt: moment(0).add(9, 'days').valueOf,
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    id: expenses[5].id,
    updates: {
      notes: 'It is important very much',
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state[5].notes).toBe('It is important very much');
});

test('should not edit an expense if id is not found', () => {
  const action = {
    type: 'ADD_EXPENSE',
    id: 'expenses[5].id',
    updates: {
      notes: 'It is important very much',
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
