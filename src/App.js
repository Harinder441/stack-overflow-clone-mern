
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import { Routess } from './component/Routess';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routess></Routess>
      </Router>
    
    </div>  
  );
}

export default App;
