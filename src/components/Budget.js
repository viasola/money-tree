import { useState, useEffect } from "react"
import EditBudget from "./EditBudget"

export default function Budget () {

  let [expense, setExpense] = useState([])
  let [budget, setBudget] = useState(0)

  useEffect(() => {
      fetch(`http://localhost:8080/expenses/monthly/7`)
       .then(res => res.json())
       .then(data => data.map(price => Number(price.amount))
       .reduce((total, price) => total + price))
       .then(data => setExpense(data))
  }, [])

   
    
  return (
    <>
      <div className="budget" style={{width:"60%", textAlign:"left", marginTop:"60px",marginLeft:"150px"}}>
        <h3>Current budget balance : RM{budget - expense <= 0? 0 : (budget - expense)} left <span style={{float:"right"}}><EditBudget budget={budget} setBudget={setBudget} className="edit-btn"/></span></h3>
        
        
        <div className="bar-wrapper" style={{width:'100%',height:'37px',border:'solid', backgroundColor:'gainsboro'}} min='0'>
          <div className="bar" style={{width: budget <= 0 ? '0%' : `${100 - (expense / budget * 100)}%`,height:'30px',backgroundColor:"gold"}} min='0'></div>
        </div>
        <h5>RM{budget === 0 ? 0 : expense} / RM{budget}</h5>
        
      </div>
    </>
  )
}