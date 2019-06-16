import { createStore, combineReducers } from "redux";
import { incomeReducer } from "./reducers/incomeReducer";
import { expensesReducer } from "./reducers/expensesReducer";

const rootReducer = combineReducers({
  income: incomeReducer,
  expenses: expensesReducer
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
