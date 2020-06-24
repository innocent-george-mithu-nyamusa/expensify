import uuid from 'uuid';
//NOTE: addExpense generator accepts a an Expense object ,
//      the values of the objects are destructured and defaults are set
//      the add expense generator returns a marked expense object .

export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: 'ADD_EXPENSE',
  id: uuid(),
  description,
  note,
  amount,
  createdAt,
});

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});
