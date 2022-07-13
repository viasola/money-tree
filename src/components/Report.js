import React, { Fragment, useEffect, useState } from "react";
import { TbReport } from "react-icons/tb";
import Moment from "moment";
import { BsArrowRightSquare, BsArrowLeftSquare } from "react-icons/bs";
// import ReportTotalExpenses from "./ReportTotalExpenses";
import { BsFileEarmarkPdf } from "react-icons/bs";

export default function Report(props) {
  const [incomes, setIncomes] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [incomesArr, setIncomesArr] = useState([]);
  const [expensesArr, setExpensesArr] = useState([]);
  const [displayMonth, setDisplayMonth] = useState(new Date().getMonth() + 1);

  var thisMonth = new Date().getMonth() + 1;

  let months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleLeftClick = () => {
    if (displayMonth === 1) {
      setDisplayMonth(1);
    } else {
      setDisplayMonth(displayMonth - 1);
    }
  };

  const handleRightClick = () => {
    if (displayMonth === 12) {
      setDisplayMonth(12);
    } else {
      setDisplayMonth(displayMonth + 1);
    }
  };

  // TOTAL EXPENSES
  useEffect(() => {
  
    fetch(`http://localhost:8080/expenses/monthly/${displayMonth}`)
      .then((res) => res.json())
      .then((data) =>
        data
          .map((expense) => Number(expense.amount))
          .reduce((total, amount) => total + amount, 0)
      )
      .then((data) => setExpenses(data));
  }, [displayMonth]);

  // TOTAL INCOME
  useEffect(() => {
  
    fetch(`http://localhost:8080/incomes/monthly/${displayMonth}`)
      .then((res) => res.json())
      .then((data) =>
        data
          .map((income) => Number(income.amount))
          .reduce((total, amount) => total + amount, 0)
      )
      .then((data) => setIncomes(data));
  }, [displayMonth]);

  //INCOME LISTS
  useEffect(() => {

    fetch(`http://localhost:8080/incomes/monthly/${displayMonth}`)
      .then((res) => res.json())
      .then((data) => setIncomesArr(data));
  }, [displayMonth]);

  //EXPENSES LISTS
  useEffect(() => {

    fetch(`http://localhost:8080/expenses/monthly/${displayMonth}`)
      .then((res) => res.json())
      .then((data) => setExpensesArr(data));
  }, [displayMonth]);

  let changeColour = expensesArr.map(function(elem) {
    if (elem.type === 'Food'){
         return 'table-success'
      } else if (elem.type === 'Transport'){
        return 'table-danger'
      } else if (elem.type === 'Debt/Bank/CreditCard'){
        return 'table-warning'
      } else if (elem.type === 'Debt/Bank/CreditCard'){
        return 'table-warning'
      } else if (elem.type === 'Personal Spending'){
        return 'table-warning'
      } else {
        return "table-secondary"
      }
    })
    
  // PRINTING BUTTON
  const handlePrint = () => {
    window.print();
  };

  return (
    <Fragment>
      <h1 className="mt-5">
        <TbReport /> Transaction Report
      </h1>

      <div>
        <h3 className="date-changes">
          <BsArrowLeftSquare onClick={handleLeftClick} style={{ cursor: 'pointer' }}/> {months[displayMonth]}{" "}
          <BsArrowRightSquare onClick={handleRightClick} style={{ cursor: 'pointer' }} />
        </h3>

        <BsFileEarmarkPdf
          size="40px"
          onClick={handlePrint}
          style={{ cursor: 'pointer' }}
        />
      </div>

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
            {incomesArr.map((income) => (
              <tr>
                <th scope="row">{income.channel}</th>
                <td>{Moment(income.date).format("DD MMM YYYY")}</td>
                <td>{income.amount}</td>
              </tr>
            ))}
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
           
            {expensesArr.map((expense) => (
              <tr class={changeColour}>
                <th scope="row">{expense.name}</th>
                <td> {Moment(expense.date).format("DD MMM YYYY")}</td>
                <td>{expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}
