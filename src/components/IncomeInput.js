import React, { Fragment ,useState} from "react"
import { GiMoneyStack } from "react-icons/gi";
import { BiAddToQueue } from "react-icons/bi";

export default function IncomeInput({incomes,getIncomes,month,setMonth,setIncomes}) {

  
  const [channel,setChannel] = useState('')
  const [amount,setAmount] = useState('')
  const [date,setDate] = useState('')

  
  const onSubmit = async(e) => {
    e.preventDefault()
    try {
      const body = {channel,amount,date}
      const response = await fetch('http://localhost:8080/incomes',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
      })
      
      setChannel('')
      setAmount('')
      setDate('')
      getIncomes()
      
      //window.location = '#/expenses'
      
    } catch (error) {
      console.error(error.message)
    }
  }


  return (
    <Fragment>
      <h1 className="income mt-5"><GiMoneyStack/>      Income</h1>
      <form className="income d-flex mt-5" onSubmit={onSubmit}>

        <input type="text" className="form-control" value={channel} onChange={e => setChannel(e.target.value)} minLength="2" placeholder="Income Channel" required/>
        <input type="number" className="form-control" value={amount} onChange={e => setAmount(e.target.value)}  required min="0" placeholder="Amount"/>
        <input type="date" className="form-control" value={date} onChange={e => setDate(e.target.value)} min="2020-01-02" required/>

        <button className="income-btn btn-success"><BiAddToQueue/></button>

      </form>
    </Fragment>
  )
}