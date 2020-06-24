import moment from 'moment';
import selectExpenses from './../../selectors/expenses';
import expenses from './../fixtures/expenses';

test('Should filter by text value', () => {
  const filters = {
    text: 'Companionship',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const action = selectExpenses(expenses, filters);
  expect(action).toEqual([expenses[7], expenses[6], expenses[5]]);
});
//Only include items whose date is in the future
test('Should filter by Start Date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0).add(7, 'days').valueOf,
    endDate: undefined,
  };
  const action = selectExpenses(expenses, filters);
  expect(action).toEqual([
    expenses[7],
    expenses[6],
    expenses[5],
    expenses[4],
    expenses[3],
  ]);
});

//We want to filter items that have a date in the past of the endDate.
//Only those ones are allowed to stay
test('Should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days').valueOf,
  };
  const action = selectExpenses(expenses, filters);
  expect(action).toEqual([expenses[0]]);
});

test('Should filter by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const action = selectExpenses(expenses, filters);
  expect(action).toEqual([
    expenses[6],
    expenses[5],
    expenses[4],
    expenses[3],
    expenses[2],
    expenses[1],
    expenses[0],
  ]);
});

test('Should filter by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };
  const action = selectExpenses(expenses, filters);
  expect(action).toEqual([
    expenses[5],
    expenses[6],
    expenses[4],
    expenses[1],
    expenses[3],
    expenses[2],
    expenses[0],
  ]);
});
