import { useState, useEffect } from "react"

export default function Budget () {

  let [expense, setExpense] = useState([])
  let [budget, setBudget] = useState(1000)
  let [width, setWidth] = useState()

  useEffect(() => {
      fetch(`http://localhost:8080/expenses/monthly/7`).then(res => res.json()).then(data => data.map(price => Number(price.amount)).reduce((total, price) => total + price)).then(data => setExpense(data))
    }, [])

  // const getBudget = budget = 0 ? 0 : expense
  
  return (
    <>
      <div className="budget" style={{border:"1px solid black",width:"60%", textAlign:"left", marginTop:"50px",marginLeft:"30px"}}>
        <h3>Current budget balance : RM{budget - expense} left <span style={{float:"right"}}><button className="edit-btn">Edit</button></span></h3>
        
        <div className="bar-wrapper" style={{width:'100%',height:'25px',border:'solid'}} min='0'>
          <div className="bar" style={{width:`${(expense / budget * 100)}%`,height:'20px',backgroundColor:"blue"}} min='0'></div>
        </div>
        <span>RM{expense} / RM{budget}</span>
        
      </div>
    </>
  )
}