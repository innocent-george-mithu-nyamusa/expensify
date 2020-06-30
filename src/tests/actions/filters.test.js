import moment from 'moment';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../../actions/filters';

test('Should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

test('Should generate set End date action object', () => {
  const time = 1000 * 60 * 60 * 24 * 366 * 50;
  const action = setEndDate(moment(time));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    startDate: moment(time),
  });
});

test('Should generate set Text action object', () => {
  const action = setTextFilter('This is important man');
  expect(action).toBe({
    type: 'SET_TEXT_FILTER',
    text: 'This is important man',
  });
});

test('Should generate set Text action object', () => {
  const action = setTextFilter();
  expect(action).toBe({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});

test('Should generate sort by date action object', () => {
  const action = sortByDate();
  expect(action).toBe({
    type: 'SORT_BY_DATE',
  });
});

test('Should generate sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toBe({
    type: 'SORT_BY_AMOUNT',
  });
});
