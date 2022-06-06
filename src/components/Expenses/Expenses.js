import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        price={props.expenses[0].price}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        price={props.expenses[1].price}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        date={props.expenses[2].date}
        price={props.expenses[2].price}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        date={props.expenses[3].date}
        price={props.expenses[3].price}
      />
    </Card>
  );
};

export default Expenses;
