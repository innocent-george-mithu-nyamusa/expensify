import React from 'react';
import { connect } from 'react-redux';
import Expense from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <p>There are no expenses to Display </p>
    ) : (
      props.expenses.map((expenseItem) => {
        return <Expense key={expense.id} {...expenseItem} />;
      })
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;
