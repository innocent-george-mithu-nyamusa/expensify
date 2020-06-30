import {
  addExpense,
  editExpense,
  removeExpense,
} from '../../actions/expense';

test('Should setup a remove expense object', () => {
  const action = removeExpense({ id: '123456' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123456',
  });
});

test('should setup edit expense object', () => {
  const action = editExpense('12345', { notes: 'New notes have been set' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '12345',
    updates: {
      notes: 'New notes have been set',
    },
  });
});

test('should return add expense action object', () => {
  const addExpenseData = {
    description: 'Daily revenues',
    note:
      'I will be gving it all for the work of the ministry, for the winning of souls',
    amount: 99999999999999999999999999999999999999,
    createdAt: 20000,
  };
  const action = addExpense(addExpenseData);
  expect(action).toEqual({
    ...addExpenseData,
    id: expect.any(String),
  });
});

test('should return add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
    id: expect.any(String),
  });
});
