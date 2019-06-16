import React from "react";
import { connect } from "react-redux";
import {
  deleteExpenseAction,
  extractFromTotalExpenses
} from "../actions/actions";

const Expenses = props => {
  const handleClick = () => {
    props.deleteExpense(props.id);
    props.extractFromTotalExpenses(props.amount);
  };
  return (
    <tr>
      <td>{props.description}</td>
      <td>{props.amount}</td>
      <td>{props.addedAt}</td>
      <td>
        <button className="btn btn-delete" onClick={handleClick}>
          <i className="material-icons">delete</i>
        </button>
      </td>
    </tr>
  );
};

const mapDispatch = dispatch => {
  return {
    deleteExpense: item => dispatch(deleteExpenseAction(item)),
    extractFromTotalExpenses: amount =>
      dispatch(extractFromTotalExpenses(amount))
  };
};

export default connect(
  null,
  mapDispatch
)(Expenses);
