import './App.css';
import { Routes, Route } from "react-router-dom"
import Dashboard from './common/dashboard/Dashboard';
import Signup from "./components/Signup";
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>  
    </div>
  );
}

export default App;