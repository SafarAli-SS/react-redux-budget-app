export const addNewIncome = "ADD_NEW_INCOME";
export const deleteIncome = "DELETE_INCOME";
export const deleteExpense = "DELETE_EXPENSE";
export const addNewExpense = "ADD_NEW_EXPENSE";
export const calcIncomeTotal = "CALCULATE_INCOME_TOTAL";
export const calcExpensesTotal = "CALCULATE_EXPENSES_TOTAL";
export const deleteFromTotalIncome = "DELETE_FROM_TOTAL_INCOME";
export const deleteFromTotalExpenses = "DELETE_FROM_TOTAL_EXPENSES";

export const addIncome = newIncome => {
  return {
    type: addNewIncome,
    newIncome
  };
};

export const addExpense = newExpense => {
  return {
    type: addNewExpense,
    newExpense
  };
};

export const deleteIncomeAction = id => {
  return {
    type: deleteIncome,
    id
  };
};

export const deleteExpenseAction = id => {
  return {
    type: deleteExpense,
    id
  };
};

export const calcTotalIncomeAmount = amount => {
  return {
    type: calcIncomeTotal,
    amount
  };
};

export const calcTotalExpensesAmount = amount => {
  return {
    type: calcExpensesTotal,
    amount
  };
};

export const extractFromTotalIncome = amount => {
  return {
    type: deleteFromTotalIncome,
    amount
  };
};

export const extractFromTotalExpenses = amount => {
  return {
    type: deleteFromTotalExpenses,
    amount
  };
};
