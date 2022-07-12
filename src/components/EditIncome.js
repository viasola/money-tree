import React,{Fragment,useState} from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import Moment from "moment";

const EditIncome = ({income,updateExpense}) => {
  
  const [channel,setChannel] = useState(income.channel)
  const [amount,setAmount] = useState(income.amount)
  const [date,setDate] = useState(income.date)

  


  function setOriIncome () {
    
    setChannel(income.channel)
    setDate(income.date)
    setAmount(income.amount)
  }

  return (
    <Fragment>
      
      <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${income.id}`}>
        <BiEditAlt/>
      </button>

      
      <div class="modal" id={`id${income.id}`} onClick={setOriIncome}>
        <div class="modal-dialog">
          <div class="modal-content">

            
            <div class="modal-header">
              <h4 className="modal-title">Edit ToDo</h4>
              <button type="button" class="close" data-dismiss="modal" onClick={() => setOriIncome}>&times;</button>
            </div>

            
            <div class="modal-body">
              
              <input type="text" className="form-control" value={channel} onChange={e => setChannel(e.target.value)}/>

              {/* <select className="form-control" value={type} onChange={e => setType(e.target.value)}>
                <option value=""></option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Debt/Bank/CreditCard">Debt/Bank/CreditCard</option>
                <option value="Personal Spending">Personal Spending</option>
                <option value="Others">Others</option>
              </select> */}

              <input type="number" className="form-control" value={amount} onChange={e => setAmount(e.target.value)}/>

              <input type="date" className="form-control" value={Moment(date).format("YYYY-MM-DD")} onChange={e => setDate(e.target.value)}/>
              

            </div>

            
            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={ () => updateExpense(channel,amount,date)}><BiEditAlt/></button>
              <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={setOriIncome}><MdOutlineCloseFullscreen/></button>
            </div>

          </div>
        </div>
      </div>

    </Fragment>
  )
}

export default EditIncome