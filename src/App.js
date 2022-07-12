import Dashboard from './Dashboard';
import Expenses from './Expenses';
import Incomes from './Incomes';
import './App.css';
import { Route,Routes} from 'react-router-dom'
import Header from './Header';
import Login from './Login';


function App() {

  return (
    <div className="App">
      <Header />
      

      <Routes>
        <Route path="expenses" element={<Expenses/>}/>
        <Route path="incomes" element={<Incomes/>}/>          
        <Route path="home" element={<Dashboard expenses={<Expenses />}/>}/>  
        <Route path="/" element={<Login/>}/>          
        
      </Routes>
      
      
    </div>
  );
}

export default App;
