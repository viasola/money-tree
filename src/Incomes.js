import { Fragment } from "react";
import IncomeInput from "./components/IncomeInput";
import IncomeList from "./components/IncomeList";
import { useState } from "react";

export default function Income () {


  const [incomes,setIncomes] = useState([])
  const [month,setMonth] = useState(0)

  const getIncomes = async() => {
    try {
      if(month > 0) {
        const response = await fetch(`http://localhost:8080/incomes/monthly/${month.toString()}`)
        const jsonData = await response.json()
        setIncomes(jsonData)
      } else {

        const response = await fetch('http://localhost:8080/incomes')
        const jsonData = await response.json()
        
        setIncomes(jsonData)
      }
    } catch (error) {
      console.error(error.message)
    }
  }


  return (
    <div className="container">
      <Fragment>
        <IncomeInput incomes={incomes} getIncomes={getIncomes} month={month} setMonth={setMonth} setIncomes={setIncomes}/>
        <IncomeList incomes={incomes} getIncomes={getIncomes} month={month} setMonth={setMonth} setIncomes={setIncomes}/>
      </Fragment>
    </div>
  )
}