import React, { Fragment, useEffect, useState } from "react";
import { TbReport } from "react-icons/tb";
import Moment from 'moment';


export default function Report(props) {
  const [expenses, setExpenses] = useState(0);
  const [incomes, setIncomes] = useState(0);
  const [incomesArr, setIncomesArr] = useState([]);
  const [expensesArr, setExpensesArr] = useState([]);

  // Total Expenses
  useEffect(() => {
    let thisMonth = new Date().getMonth() + 1;

    fetch(`http://localhost:8080/expenses/monthly/${thisMonth}`)
      .then((res) => res.json())
      .then((data) =>
        data
          .map((expense) => Number(expense.amount))
          .reduce((total, amount) => total + amount)
      )
      .then((data) => setExpenses(data));
  }, []);

  // Total Income
  useEffect(() => {
    let thisMonth = new Date().getMonth() + 1;

    fetch(`http://localhost:8080/incomes/monthly/${thisMonth}`)
      .then((res) => res.json())
      .then((data) =>
        data
          .map((income) => Number(income.amount))
          .reduce((total, amount) => total + amount)
      )
      .then((data) => setIncomes(data));
  }, []);

  //INCOME LISTS
  useEffect(() => {
    let thisMonth = new Date().getMonth() + 1;

    fetch(`http://localhost:8080/incomes/monthly/${thisMonth}`)
      .then((res) => res.json())
      .then((data) => setIncomesArr(data));
  }, []);

//EXPENSES LISTS
useEffect(() => {
    let thisMonth = new Date().getMonth() + 1;

    fetch(`http://localhost:8080/expenses/monthly/${thisMonth}`)
      .then((res) => res.json())
      .then((data) => setExpensesArr(data));
  }, []);

  return (
    <Fragment>
      <h1 className="mt-5">
        <TbReport /> Transaction Report
      </h1>

      <br />

      <div className="report">
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col">Summary</th>
              <th scope="col">Amount(MYR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Income</th>
              <td>{incomes}</td>
            </tr>
            <tr>
              <th scope="row">Expense</th>
              <td>{expenses}</td>
            </tr>
            <tr>
              <th scope="row">Balance</th>
              <td>{incomes - expenses}</td>
            </tr>
          </tbody>
        </table>
        <br /> <br />
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col">Income</th>
              <th scope="col">Date</th>
              <th scope="col">Amount(MYR)</th>
             
            </tr>
          </thead>
          <tbody>
         
                {incomesArr.map(income => 
                   <tr>
                <th scope="row">{income.channel}</th>
              <td>{Moment(income.date).format("DD MMM YYYY")}</td>
              <td>{income.amount}</td>
              </tr>
              )}
        
          </tbody>

        </table>

        <br /> <br />

        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col">Expenses</th>
              <th scope="col">Date</th>
              <th scope="col">Amount(MYR)</th>
            </tr>
          </thead>
          <tbody>
         
                {expensesArr.map(expense => 
                   <tr>
                <th scope="row">{expense.name}</th>
              <td>{Moment(expense.date).format("DD MMM YYYY")}</td>
              <td>{expense.amount}</td>
              </tr>
              )}
        
          </tbody>

        </table>


      </div>
    </Fragment>
  );
}
