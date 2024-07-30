import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import '../common/Login.css';
 
//alert

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard');
    };
    
return (
    <div className="main">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
        </div>
        <button type="submit">Login</button>
    </form>
        
        <div>
            <p>Don't have an account? <Link to="/Signup">Sign Up</Link></p>
        </div>
    </div>
 );
};
    
export default Login;