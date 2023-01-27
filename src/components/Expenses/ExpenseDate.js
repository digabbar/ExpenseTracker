import React from "react";
import classes from "./ExpenseDate.module.css";
const ExpenseDate = (props) => {
  const date = props.date.toDateString();

  return (
    <div className={classes["expense-date"]}>
      <div className={classes["expense-date__month"]}>
        {date.substring(4, 7)}
      </div>
      <div className={classes["expense-date__day"]}>
        {date.substring(8, 10)}
      </div>
      <div className={classes["expense-date__year"]}>{date.substring(11)}</div>
    </div>
  );
};

export default ExpenseDate;
