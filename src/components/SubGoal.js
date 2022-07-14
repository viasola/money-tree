import React, { Fragment ,useState} from "react"


export default function SubGoal() {

  const [imageurl,setImageUrl] = useState('')
  const [title,setTitle] = useState('')
  const [amount,setAmount] = useState('')
  const [date,setDate] = useState('')

  const onSubmit = async(e) => {
    e.preventDefault()
    try {
      const body = {imageurl,title,amount,date}
      const response = await fetch('http://localhost:8080/goals/',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
      })
          
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div className="goal-container">
      <h1>YOUR GOALS</h1>
      <div className="goal-input">
        <form className="table mt-5 text-center" onSubmit={onSubmit}>
         <input type="text" className="form-control" placeholder="Image URL" required value={imageurl} onChange={e => setImageUrl(e.target.value)}/>
          <input type="text" className="form-control" required placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}/>
          <input type="number" className="form-control" required placeholder="Budget allocation" value={amount} onChange={e => setAmount(e.target.value)}/>
          <input type="date" className="form-control" min="2020-01-02" required value={date} onChange={e => setDate(e.target.value)}/>
          <br />
          <button className="btn btn-success">ADD GOALS</button>
        </form>
      </div>
     

    </div>
  )
}