export default function Budget () {
  return (
    <>
      <div className="budget" style={{border:"1px solid black",width:"60%", textAlign:"left", marginTop:"50px",marginLeft:"30px"}}>
        <h3>Current budget balance : $1000 left <span style={{float:"right"}}><button className="edit-btn">Edit</button></span></h3>
        
        <div className="bar" style={{width:'50%',height:'20px',backgroundColor:"blue"}}></div>
        <span>10/1000</span>
        
      </div>
    </>
  )
}