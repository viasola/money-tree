import React,{Fragment,useEffect,useState} from "react";
import { GiMoneyStack } from "react-icons/gi";


export default function Report(props) {
    
    const [expenses,setExpenses] = useState([])

    // const [channel,setChannel] = useState(income.channel)
    // const [amount,setAmount] = useState(income.amount)
  

    const response = await fetch(`http://localhost:8080/expenses`)
    const jsonData = await response.json()
    console.log(response.json())
    setExpenses(jsonData)

    



    return(
        <Fragment>
            <h1 className="mt-5"><GiMoneyStack/>      Transaction Report</h1>

            <div className="report">
            
                <div className="Summary" style={{width:'350px',marginLeft:"100px",marginTop:"70px"}}>
                    <h5>Summary</h5>
                    <p>Expenses = <span>{expenses}</span></p>
                    <p>Income</p>
                    <p>Balance</p>
                    <p>Total Balance</p>
                </div>

                <div className="Income" style={{width:'350px',marginLeft:"100px",marginTop:"70px"}}>
                    <h5>Income</h5>
                    <p>Salary</p>
                    <p>Dividend</p>
                    <p>Cashback</p>
                </div>

                <div className="Income" style={{width:'350px',marginLeft:"100px",marginTop:"70px"}}>
                    <h5>Expense</h5>
                    <p>Salary</p>
                    <p>Dividend</p>
                    <p>Cashback</p>
                </div>

            </div>
        </Fragment>
        
    )
}

