import Dashboard from './Dashboard';
import Expenses from './Expenses';
import Income from './Income';
import './App.css';
import { HashRouter,Link,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/expenses" element={<Expenses/>}/>
        <Route path="/income" element={<Income/>}/>          
        <Route path="/" element={<Dashboard/>}/>          
      </Routes>
      
      
    </div>
  );
}

export default App;
