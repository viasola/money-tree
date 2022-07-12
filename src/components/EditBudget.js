
export default function EditBudget(props) {

// const handleChange = (e) => {
//     e.preventDefault()
//     setBudgetInput( )
// }
    return (
<>
<div class="container">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Edit
  </button>

  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <div class="modal-header">
          <h4 class="modal-title">Enter Budget</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div class="modal-body">
          <input type="number" value={props.budget} onChange={e => props.setBudget(e.target.value)}/>
        </div>
        
        <div class="modal-footer">
            <button class="btn btn-warning" data-dismiss="modal">Update</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  
</div>



        {/* <div>
            <button className="edit-btn">Edit</button>
            <form action="">
                <input type={budgetInput ? 'text' : 'hidden'} />
                <button>Update</button>
            </form>
        </div> */}


</>
        
    )
}