import { useState } from "react"

export default function EditBudget({budget,setBudget,updateBudget,id}) {

  const [budget_amount,setAmount] = useState()


  return (
  <>
    <div class="container">
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target={`#id${id}`}>
        Edit
      </button>

      <div class="modal" id={`id${id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
          
            <div class="modal-header">
              <h4 class="modal-title">Enter Budget</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            
            <div class="modal-body">
              <input type="number" value={budget_amount} onChange={e => setAmount(Number(e.target.value))}/>
            </div>
            
            <div class="modal-footer">
                <button class="btn btn-warning" data-dismiss="modal" onClick={() => updateBudget(Number(budget_amount),budget)}>Update</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>


  </>
        
  )
}