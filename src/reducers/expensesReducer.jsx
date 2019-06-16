import {
  addNewExpense,
  deleteExpense,
  calcExpensesTotal,
  deleteFromTotalExpenses
} from "../actions/actions";

import uuid from "uuid";

const initState = {
  expenses: [
    {
      id: uuid(),
      description: "bought new car",
      amount: 4000,
      addedAt: "Fri Jun 14 2019"
    },
    {
      id: uuid(),
      description: "bills",
      amount: 300,
      addedAt: "Sat Jun 15 2019"
    }
  ],
  expensesTotal: 4300
};

export const expensesReducer = (state = initState, action) => {
  switch (action.type) {
    case addNewExpense:
      return { ...state, expenses: [...state.expenses, action.newExpense] };
    case deleteExpense:
      return {
        ...state,
        expenses: [...state.expenses.filter(el => el.id !== action.id)]
      };
    case calcExpensesTotal:
      let newExpensesTotal = state.expensesTotal + action.amount;
      return {
        ...state,
        expensesTotal: newExpensesTotal
      };
    case deleteFromTotalExpenses:
      let newExtractedExpensesTotal = state.expensesTotal - action.amount;
      return {
        ...state,
        expensesTotal: newExtractedExpensesTotal
      };
    default:
      return state;
  }
};
