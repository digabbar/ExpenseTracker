import React, { useState } from "react";
import classes from "./Expenses.module.css";
import ExpensesList from "./ExpenseList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpansesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterHandler = (year) => {
    setFilteredYear(year);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.toDateString().substring(11) === filteredYear;
  });

  return (
    <Card className={classes.expenses}>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesFilter onChangeFilter={filterHandler} selected={filteredYear} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
