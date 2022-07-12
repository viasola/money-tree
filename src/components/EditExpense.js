import React,{Fragment,useState} from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineCloseFullscreen } from "react-icons/md";

const EditExpense = ({expense}) => {
  const [name,setName] = useState(expense.name)
  const [type,setType] = useState(expense.type)
  const [amount,setAmount] = useState(expense.amount)
  const [date,setDate] = useState(expense.date)

  
  const updateExpense = async(e) => {
    e.preventDefault()
    try {
      const body = {name,type,amount,date}
      const response = await fetch(`http://localhost:8080/expenses/${expense.id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
      })

      //window.location.reload()
      // page will refresh to get latest
      //how can not refresh???
      //if refresh will lost my state of month

    } catch (error) {
      console.error(error.message)
    }
  }

  function setOriExpense () {
    setAmount(expense.amount)
    setName(expense.name)
    setDate(expense.date)
    setAmount(expense.amount)
  }

  return (
    <Fragment>
      
      <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${expense.id}`}>
        <BiEditAlt/>
      </button>

      
      <div class="modal" id={`id${expense.id}`} onClick={setOriExpense}>
        <div class="modal-dialog">
          <div class="modal-content">

            
            <div class="modal-header">
              <h4 className="modal-title">Edit ToDo</h4>
              <button type="button" class="close" data-dismiss="modal" onClick={() => setOriExpense}>&times;</button>
            </div>

            
            <div class="modal-body">
              
              <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>

              <select className="form-control" value={type} onChange={e => setType(e.target.value)}>
                <option value=""></option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Debt/Bank/CreditCard">Debt/Bank/CreditCard</option>
                <option value="Personal Spending">Personal Spending</option>
                <option value="Others">Others</option>
              </select>

              <input type="number" className="form-control" value={amount} onChange={e => setAmount(e.target.value)}/>

              <input type="date" className="form-control" value={date} onChange={e => setDate(e.target.value)}/>
              

            </div>

            
            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={ e => updateExpense(e)}><BiEditAlt/></button>
              <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={setOriExpense}><MdOutlineCloseFullscreen/></button>
            </div>

          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default EditExpense