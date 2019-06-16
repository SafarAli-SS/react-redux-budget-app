import React from "react";
import { connect } from "react-redux";
import { deleteIncomeAction, extractFromTotalIncome } from "../actions/actions";

const Income = props => {
  const handleClick = () => {
    props.deleteIncome(props.id);
    props.extractFromTotalIncome(props.amount);
  };
  return (
    <tr>
      <td>{props.description}</td>
      <td>{props.amount}</td>
      <td>{props.addedAt}</td>
      <td>
        <button className="btn" onClick={handleClick}>
          <i className="material-icons">delete</i>
        </button>
      </td>
    </tr>
  );
};

const mapDispatch = dispatch => {
  return {
    deleteIncome: item => dispatch(deleteIncomeAction(item)),
    extractFromTotalIncome: amount => dispatch(extractFromTotalIncome(amount))
  };
};

export default connect(
  null,
  mapDispatch
)(Income);
