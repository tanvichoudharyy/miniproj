import './App.css';
import { Routes, Route } from "react-router-dom"
import { Dashboard } from './components/Dashboard';
import { Signup } from "./Signup";

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