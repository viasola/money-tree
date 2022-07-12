import React,{Fragment,useEffect,useState} from "react";
import EditExpense from "./EditExpense";
import { MdDeleteForever } from "react-icons/md";
import Moment from 'moment';



export default function ExpensesList({props}) {

  const [expenses,setExpenses] = useState([])
  const [month,setMonth] = useState(0)

  //delete function
  const deleteExpense = async(id) => {
    try {
      const deleteExpense = await fetch(`http://localhost:8080/expenses/${id}`,{
        method:"DELETE"
      })
      setExpenses(expenses.filter(expense => expense.id !== id))
    } catch (error) {
      console.error(error.message)
    }
  }

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

  useEffect(() => {
    getExpenses()
  },[month,<EditExpense/>,props])

  
  
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
          <th>Name</th>
          <th>Type</th>
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
        {expenses.map(expense => {
          return <tr key={expense.id}>
            <td>{expense.name}</td>
            <td>{expense.type}</td>
            <td><span>RM</span>{expense.amount}</td>
            <td>{Moment(expense.date).format("DD MMM YYYY")}</td>
            <td><EditExpense expense={expense}/></td>
            <td>
              <button className="btn btn-danger" onClick={() => deleteExpense(expense.id)}><MdDeleteForever/></button>
            </td>
          </tr>
        })}
        
      </tbody>
    </table>
   </Fragment>
  )
}