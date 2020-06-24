import moment from 'moment';
import filtersReducer from './../../reducers/filters';

test('Should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('Should set Sort by amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('Should set sort by Date ', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount',
  };
  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('Should set text filter ', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'Filtering text',
  });
  expect(state.text).toBe('Filtering text');
});

test('Should set Start Date ', () => {
  const currentStartDate = moment(0).add(3, 'days').valueOf;
  const action = { type: 'SET_START_DATE', startDate: currentStartDate };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(currentStartDate);
});

test('Should set End Date ', () => {
  const currentEndDate = moment(0).add(3, 'days').valueOf;
  const action = { type: 'SET_END_DATE', endDate: currentEndDate };
  const state = filtersReducer(undefined, action);
  expect(state.EndDate).toBe(currentEndDate);
});
