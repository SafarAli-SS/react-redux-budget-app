import React from "react";
import { connect } from "react-redux";

function Budget(props) {
  return (
    <div className="budget center-align">
      <h3 className="white-text">
        My budget in {""}
        <span className="cyan-text">{new Date().toLocaleDateString("az")}</span>
      </h3>
      <h4
        className={
          props.incomeTotal - props.expensesTotal >= 0
            ? "green-text"
            : "red-text"
        }
      >
        {props.incomeTotal - props.expensesTotal > 0 ? "+" : ""}
        {props.incomeTotal - props.expensesTotal}AZN
      </h4>
      <h5 className="green-text text-lighten-1">
        Total Income: {props.incomeTotal > 0 ? "+" : ""}
        {props.incomeTotal}AZN
      </h5>
      <h5 className="red-text">
        Total Expenses: {props.expensesTotal === 0 ? "" : "-"}
        {props.expensesTotal}AZN
      </h5>
    </div>
  );
}

const mapState = state => {
  return {
    incomeTotal: state.income.incomeTotal,
    expensesTotal: state.expenses.expensesTotal
  };
};

export default connect(mapState)(Budget);
