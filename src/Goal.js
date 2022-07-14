import SubGoal from "./components/SubGoal"
import SubGoalList from "./components/SubGoalList";
import { Fragment, useEffect } from "react";
import { useState } from "react";



export default function Goal() {

  const [goals, setGoals] = useState([])

  useEffect(() => {
     fetch(`http://localhost:8080/goals/`)
      .then(res => res.json())
      .then(res => setGoals(res))
      // console.log(jsonData)
    
  }, [])

  // console.log(goals)

  return (
    <div className="container">
      <Fragment>
       
        <SubGoal />
        <SubGoalList goals={goals} />
      </Fragment>
    </div>
  )
}