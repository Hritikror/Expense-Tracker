import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //one component can have multiple state(using multiple state method)
  const [enteredTitle, setEnteredTitle] = useState(""); //always listen string
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput ,setUserInput] = useState({          //use only one state method
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); //event is js document object  //multiple state method

    // setUserInput((prevState)={
    //     return {...prevState, enteredTitle: event.target.value}           //one state method
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value); //multiple state method

    // setUserInput((prevState)={
    //     return {...prevState, enteredAmount: event.target.value}           //one state method
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value); //multiple state method

    // setUserInput((prevState)={
    //     return {...prevState, enteredDate: event.target.value}           //one state method
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault(); //this will prevent for reloading the page or sending data to server

    const expenseData = {
      //create a object of form data
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //console.log(expenseData);
    props.onSaveExpenseData(expenseData)
    setEnteredTitle(""); //again set value in input box as ''(empty) i.e clear the form after submitting the form
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}        //again value will set to ''(empty)
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2018-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
