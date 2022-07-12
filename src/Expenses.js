import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ExpensesInput from "./components/ExpensesInput";
import ExpensesList from "./components/ExpensesList";

export default function Expenses () {

  return (
    <Fragment>
      <div className="container">

        <ExpensesInput />
        <ExpensesList ExpensesInput={<ExpensesInput/>}/>
      </div>
    </Fragment>
  )
}