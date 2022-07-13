import { useState, useEffect } from "react"
import EditBudget from "./EditBudget"

export default function Budget () {

  let [expense, setExpense] = useState([])
  
  let [budget, setBudget] = useState(0)
  let [id,setId] = useState('')

  useEffect(() => {
      fetch(`http://localhost:8080/expenses/monthly/7`)
       .then(res => res.json())
       .then(data => data.map(price => Number(price.amount))
       .reduce((total, price) => total + price))
       .then(data => setExpense(data))
  }, [])

  const updateBudget = async(budget_amount,budget) => {
    try {
      const body = {budget_amount}
      const response = await fetch(`http://localhost:8080/budget/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
      })
      getBudget()
    } catch (error) {
      console.error(error.message)
    }
  }

  function getBudget() {
    fetch('http://localhost:8080/budget')
    .then(res => res.json())
    // .then(data => setData(data))
    .then(data => {
      data.map(dat => setBudget(dat.budget_amount))
      data.map(dat => setId(dat.id))

    }) 
  }

  useEffect(() => {
   getBudget()
      
  },[])

  

    
  return (
    <>
      <div className="budget" style={{width:"60%", textAlign:"left", marginTop:"60px",marginLeft:"150px"}}>
        <h3>Current budget balance : RM{budget - expense <= 0? 0 : (budget - expense)} left <span style={{float:"right"}}><EditBudget budget={budget} setBudget={setBudget} updateBudget={updateBudget} id={id} className="edit-btn"/></span></h3>
        
        
        <div className="bar-wrapper" style={{width:'100%',height:'37px',border:'solid', backgroundColor:'gainsboro'}} >
          <div className="bar" style={{width: (budget-expense) <= 0 ? "0%" : `${100- (expense/budget*100)}%`,height:'30px',backgroundColor:"gold"}} ></div>
        </div>
        <h5>RM{budget === 0 ? 0 : expense} / RM{budget}</h5>
        
      </div>
    </>
  )
}