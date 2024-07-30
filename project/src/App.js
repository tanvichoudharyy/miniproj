import './App.css';
import { Routes, Route } from "react-router-dom"
import { Navbar } from './common/Navbar';
import { Dashboard } from './components/Dashboard';
import { Signup } from "./Signup";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

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