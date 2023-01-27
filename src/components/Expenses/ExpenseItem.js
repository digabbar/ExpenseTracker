import React from "react";
import ExpenseDate from "./ExpenseDate";
import classes from "./ExpenseItem.module.css";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  return (
    <li>
      <Card className={classes["expense-item"]}>
        <ExpenseDate date={props.expense.date} />
        <div className={classes["expense-item__description"]}>
          <h2>{props.expense.title}</h2>
          <div className={classes["expense-item__price"]}>
            ${props.expense.amount}
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
