import { Fragment } from "react";
import IncomeInput from "./components/IncomeInput";
import IncomeList from "./components/IncomeList";


export default function Income () {
  return (
    <div className="container">
      <Fragment>
        <IncomeInput/>
        <IncomeList IncomeInput={<IncomeInput/>}/>
      </Fragment>
    </div>
  )
}