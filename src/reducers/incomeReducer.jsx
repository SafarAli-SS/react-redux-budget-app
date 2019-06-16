import {
  addNewIncome,
  deleteIncome,
  calcIncomeTotal,
  deleteFromTotalIncome
} from "../actions/actions";
import uuid from "uuid";

const initState = {
  income: [
    {
      id: uuid(),
      description: "salary",
      amount: 1300,
      addedAt: "Wed Jun 5 2019"
    },
    {
      id: uuid(),
      description: "sold car",
      amount: 3755,
      addedAt: "Fri Jun 14 2019"
    }
  ],
  incomeTotal: 5055
};

export const incomeReducer = (state = initState, action) => {
  switch (action.type) {
    case addNewIncome:
      return { ...state, income: [...state.income, action.newIncome] };
    case deleteIncome:
      return {
        ...state,
        income: [...state.income.filter(el => el.id !== action.id)]
      };
    case calcIncomeTotal:
      let newIncomeTotal = state.incomeTotal + action.amount;
      return {
        ...state,
        incomeTotal: newIncomeTotal
      };
    case deleteFromTotalIncome:
      let newExtractedIncomeTotal = state.incomeTotal - action.amount;
      return {
        ...state,
        incomeTotal: newExtractedIncomeTotal
      };
    default:
      return state;
  }
};
