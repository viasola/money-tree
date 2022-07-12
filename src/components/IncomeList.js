import React,{Fragment,useEffect,useState} from "react";
import EditIncome from "./EditIncome";
import { MdDeleteForever } from "react-icons/md";
import Moment from 'moment';

export default function IncomeList({incomes,getIncomes,month,setMonth,setIncomes}) {
  //delete function
  const deleteIncome = async(id) => {
    try {
      const deleteIncome = await fetch(`http://localhost:8080/incomes/${id}`,{
        method:"DELETE"
      })
      // setIncomes(incomes.filter(income => income.id !== id))
    } catch (error) {
      console.error(error.message)
    }
  }

  const updateIncome = async(channel,amount,date,income) => {
    
    try {
      const body = {channel,amount,date}
      const response = await fetch(`http://localhost:8080/incomes/${income.id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
      })
      getIncomes()
      //window.location.reload()
      // page will refresh to get latest
      //how can not refresh???
      //if refresh will lost my state of month

    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getIncomes()
  },[month])

  
  
  return (
   <Fragment>

    <select className="form-control form-control-lg" placeholder="MM" onChange={(e) => setMonth(Number(e.target.value))}>
      <option value = ''>MM</option>
      <option name="January" value="1">January</option>
      <option name="February" value="2">February</option>
      <option name="March" value="3">March</option>
      <option name="April" value="4">April</option>
      <option name="May" value="5">May</option>
      <option name="June" value="6">June</option>
      <option name="July" value="7">July</option>
      <option name="August" value="8">August</option>
      <option name="September" value="9">September</option>
      <option name="October" value="10">October</option>
      <option name="November" value="11">November</option>
      <option name="December" value="12">December</option>
    </select>

    <table className="table mt-5 text-center w-auto ">
      <thead>
        <tr>
          <th>Channel</th>         
          <th>Amount</th>
          <th>Date</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>John</td>
          <td>Doe</td>
          <td>john@example.com</td>
        </tr> */}
        {incomes.map(income => {
          return <tr key={income.id}>
            <td>{income.channel}</td>
            
            <td><span>RM</span>{income.amount}</td>
            <td>{Moment(income.date).format("DD MMM YYYY")}</td>
            <td><EditIncome income={income} updateIncome={updateIncome}/></td>
            <td>
              <button className="btn btn-danger" onClick={() => deleteIncome(income.id)}><MdDeleteForever/></button>
            </td>
          </tr>
        })}
        
      </tbody>
    </table>
   </Fragment>
  )
}