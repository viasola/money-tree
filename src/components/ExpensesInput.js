import React, { Fragment ,useState} from "react"
import { GiTakeMyMoney } from "react-icons/gi";
import { BiAddToQueue } from "react-icons/bi";

export default function ExpensesInput() {

  const [name,setName] = useState('')
  const [type,setType] = useState('')
  const [amount,setAmount] = useState('')
  const [date,setDate] = useState('')


  const onSubmit = async(e) => {
    //e.preventDefault()
    try {
      const body = {name,type,amount,date}
      const response = await fetch('http://localhost:8080/expenses',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
      })
      setName('')
      setType('')
      setAmount('')
      setDate('')
      
      //window.location = '#/expenses'
      
    } catch (error) {
      console.error(error.message)
    }
  }


  return (
    <Fragment>
      <h1 className="mt-5"><GiTakeMyMoney/>      Expenses</h1>
      <form className="d-flex mt-5" onSubmit={onSubmit}>

        <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} minLength="2" placeholder="Name of expense" required/>

        <select className="form-control" value={type} onChange={e => setType(e.target.value)} required >
          <option placeholder="Type of expense" value=""></option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Debt/Bank/CreditCard">Debt/Bank/CreditCard</option>
          <option value="Personal Spending">Personal Spending</option>
          <option value="Others">Others</option>
        </select>

        <input type="number" className="form-control" value={amount} onChange={e => setAmount(e.target.value)}  required min="0"placeholder="Amount"/>

        <input type="date" className="form-control" value={date} onChange={e => setDate(e.target.value)} min="2020-01-02" required/>

        <button className="btn btn-success"><BiAddToQueue/></button>

      </form>
    </Fragment>
  )
}