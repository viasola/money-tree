import { TiThMenu } from "react-icons/ti";
import { GiPineTree } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import './Header.css'

export default function Header() {
  return (
    <>
    <header style={{backgroundColor:"mediumseagreen", textAlign:"left"}}>
      <h1 className="brand-name" style={{marginBottom:"0px", paddingLeft:"50px", paddingTop:"20px", paddingBottom:"20px" }}><GiPineTree/> MONEY TREE 
      <span style={{float:'right'}}><a class="dropdown-item" href="#"><MdLogout/></a></span>
      </h1>
    </header>

      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
       
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#/home">Home</a>
          </li>
        
          <li class="nav-item dropdown" >
            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown" >
              <TiThMenu />
            </a>
            <div class="dropdown-menu" >
              <a class="dropdown-item" href="#/expenses">Expenses</a>
              <a class="dropdown-item" href="#/incomes">Incomes</a>
              <a class="dropdown-item" href="#/transaction-report">Transaction Report</a>
              <a class="dropdown-item" href="#/goal">Goals</a>

            </div>
          </li>
        </ul>
      </nav>
    </>
  )
}