import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('Should render expenseForm correctly without Data', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render expenseForm correctly with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render Error for invalid Descsription Submission', () => {
  // 1) Render the Component
  const wrapper = shallow(<ExpenseForm />);
  // 2)Set SnapShot
  expect(wrapper).toMatchSnapshot();
  //Locate the element to check the submit event ,\
  //When the Event:('Submit Event')Object is fired ,
  //We make a fake preventDefault property inorder to allow the form to be sumitted;
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  //We check if the Error state has been set
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  //render the Component again
  expect(wrapper).toMatchSnapshot();
});

test('Should set description on input change', () => {
  const value = 'Description Changed';
  // 1) Render ExpenseForm
  const wrapper = shallow(<ExpenseForm />);

  // 2) Change the Input/ Submit the change Event
  //    i) Access the element
  //    ii) Simulate the event
  //    iii) Create a fake event, in this case create fake data
  wrapper.find('input').at(0).simulate('change', {
    target: {
      value,
    },
  });
  // 3) Check if the Description Asertion was set
  expect(wrapper.state('description')).toBe(value);
});

test('Should set note on textarea change', () => {
  const value = 'Note Changed';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('textarea').simulate('change', {
    target: {
      value,
    },
  });
  expect(wrapper.state('note')).toBe(value);
});

test('Should set amount on valid input', () => {
  const amount = '23.53';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at[1].simulate('change', {
    target: {
      value,
    },
  });
  expect(wrapper.state('amount')).toBe(amount);
});

test('Should not set amount for invalid amount Submission', () => {
  const amount = '23.539';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at[1].simulate('change', {
    target: {
      value,
    },
  });
  expect(wrapper.state('amount')).toBe('');
});

test('Should not set amount for invalid amount Submission', () => {
  //Spy Mock Functions
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm espense={expense[0]} onSubmit={onSubmitSpy} />
  );

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt,
  });
});

test('Should set new Date on Date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set calendar focus on Change', () => {
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('SingleDatePicker').prop('onFocusChange')(true);
  expect(wrapper.state('calendarFocused')).toBe(true);
});
