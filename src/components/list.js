import React from "react";
import { connect } from "react-redux";
import Income from "./income";
import Expenses from "./expenses";

const List = props => {
  return (
    <div className="row">
      <div className="col m6 s12">
        <table className="highlight striped">
          <caption className="green-text text-darken-3">
            <h4>Income</h4>
          </caption>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Date:</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {props.income.map(inc => {
              return <Income key={inc.id} {...inc} />;
            })}
          </tbody>
        </table>
      </div>
      <div className="col m6 s12">
        <table className="highlight striped">
          <caption className="red-text text-darken-1">
            <h4>Expenses</h4>
          </caption>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Date:</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {props.expenses.map(exp => {
              return <Expenses key={exp.id} {...exp} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    income: state.income.income,
    expenses: state.expenses.expenses
  };
};

export default connect(mapState)(List);
