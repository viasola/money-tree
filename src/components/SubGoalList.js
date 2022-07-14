

import Moment from 'moment';
import { Fragment, useEffect } from "react";
import { useState } from "react";


export default function SubGoalList({ goals }) {

  const [days, setDays] = useState(0)

  function calculateDays(elem) {
   

    return Moment(elem.date, "YYYYMMDD").fromNow()

  }


  return (
    <div>
      <div className="goal-container">
        {goals.map(goal =>
          <div className="each-goal">
            <div className="top-goal">
              <img src={goal.imageurl} alt="" style={{ justifyContent: 'center', height: '400px', width: '1000px', borderRadius: '5%', objectFit: "cover" }} />
            </div>
            <div className="middle-goal" style={{ display: 'flex', justifyContent: 'space-around' }}>
              <h4 >{goal.title}</h4>
              <h4 >RM {goal.amount}</h4>
              <h4 >{Moment(goal.date).format("DD MMM YYYY")}</h4>
            </div>
            <div className="bottom-goal">
              <h4>{calculateDays(goal)}</h4>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}