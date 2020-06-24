const expensesReducerDefaultstate = [];

export default (state = expensesReducerDefaultstate, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) ({ ...expense, ...updates });
      });
    default:
      return state;
  }
};
