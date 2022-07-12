import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ExpensesInput from "./components/ExpensesInput";
import ExpensesList from "./components/ExpensesList";

export default function Expenses () {

  const [expenses,setExpenses] = useState([])
  const [month,setMonth] = useState(0)
  
  const getExpenses = async() => {
    try {
      if(month > 0) {
        const response = await fetch(`http://localhost:8080/expenses/monthly/${month.toString()}`)
        const jsonData = await response.json()
        setExpenses(jsonData)
      } else {

        const response = await fetch('http://localhost:8080/expenses')
        const jsonData = await response.json()
        
        setExpenses(jsonData)
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <Fragment>
      <div className="container">

        <ExpensesInput expenses={expenses} getExpenses={getExpenses} month={month} setMonth={setMonth}/>
        <ExpensesList expenses={expenses} getExpenses={getExpenses} setExpenses={setExpenses} month={month} setMonth={setMonth}/>
      </div>
    </Fragment>
  )
}