import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";


const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> No Expense Found</h2>;
  }
  // let expenseContent = <p>No Exspenses Available</p>

  return (
    <ul className="expenses-list">
      {props.items.map(
        (
          expense // very impt .. dynamically create array
        ) => (
          <ExpenseItem
            key={expense.id} //performance issue,reloading again n again
            //all item if we add new expense
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      )}
    </ul>
  );
};

export default ExpensesList;
