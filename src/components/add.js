import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addIncome,
  addExpense,
  calcTotalIncomeAmount,
  calcTotalExpensesAmount
} from "../actions/actions";
import uuid from "uuid";

class Add extends Component {
  state = {
    selected: "+",
    newItem: {
      id: uuid(),
      description: "",
      amount: "",
      addedAt: new Date().toDateString()
    }
  };

  handleSelectChange(e) {
    this.setState({ ...this.state, selected: e.target.value });
  }

  handleChange(e) {
    let { newItem } = { ...this.state };
    let currentState = newItem;
    let { name, value, type } = e.target;
    currentState[name] = type === "number" ? Number(value) : value;
    this.setState({
      newItem: currentState
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.selected === "+") {
      this.props.addIncome(this.state.newItem);
      this.props.calcTotalIncomeAmount(this.state.newItem.amount);
    } else if (this.state.selected === "-") {
      this.props.addExpense(this.state.newItem);
      this.props.calcTotalExpensesAmount(this.state.newItem.amount);
    }
    this.setState({
      selected: "+",
      newItem: {
        id: uuid(),
        description: "",
        amount: "",
        addedAt: new Date().toDateString()
      }
    });
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={e => this.handleSubmit(e)}>
          <div className="input-field col m2 s2">
            <select
              style={{ display: "inline" }}
              onChange={e => this.handleSelectChange(e)}
              name="selected"
              value={this.state.selected}
            >
              <option value="+">+</option>
              <option value="-">-</option>
            </select>
          </div>
          <div className="input-field col m7 s10">
            <input
              id="description"
              type="text"
              name="description"
              onChange={e => this.handleChange(e)}
              value={this.state.newItem.description}
              required
            />
            <label htmlFor="description" className="active">
              Description
            </label>
          </div>
          <div className="input-field col m2 s6">
            <input
              id="amount"
              name="amount"
              type="number"
              onChange={e => this.handleChange(e)}
              value={this.state.newItem.amount}
              required
            />
            <label htmlFor="amount" className="active">
              Amount
            </label>
          </div>
          <div className="input-field col m1 s6">
            <button type="submit" className="btn btn-floating btn-large pulse">
              <i className="large material-icons">add_circle_outline</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    addIncome: newIncome => dispatch(addIncome(newIncome)),
    addExpense: newExpense => dispatch(addExpense(newExpense)),
    calcTotalExpensesAmount: amount =>
      dispatch(calcTotalExpensesAmount(amount)),
    calcTotalIncomeAmount: amount => dispatch(calcTotalIncomeAmount(amount))
  };
};

export default connect(
  null,
  mapDispatch
)(Add);
