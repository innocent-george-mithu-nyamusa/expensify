import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('Should render expenseList correctly', () => {
  expect(wrapper).toMatchSnapshot;
});

test('Should render expenseList with Filters data correctly', () => {
  wrapper.setProps({
    filters: altFilters,
  });
  expect(wrapper).toMatchSnapshot;
});

test('Should handle text change', () => {
  const value = 'Text changed';
  wrapper.find('input').simulate('change', () => {
    target: {
      value;
    }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('Should sort by Date', () => {
  const value = 'date';
  wrapper.setProps({
    flters: altFilters,
  });
  wrapper.find('select').simulate('change', () => {
    target: {
      value;
    }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('Should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', () => {
    target: {
      value;
    }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('Should handle date changes', () => {
  const startDate = moment(0).add(2, 'years');
  const endDate = moment(0).add(4, 'years');
  wrapper.find('DateRangePicker').prop('onDateChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('Should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
