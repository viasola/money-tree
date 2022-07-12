import { TiThMenu } from "react-icons/ti";
import { GiPineTree } from "react-icons/gi";

export default function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
       
        <a class="navbar-brand" href="#"><GiPineTree/></a>

        
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
         

          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
              <TiThMenu/>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#/expenses">Expenses</a>
              <a class="dropdown-item" href="#/incomes">Incomes</a>
              
            </div>
          </li>
        </ul>
      </nav>

    
    </>
  )
}