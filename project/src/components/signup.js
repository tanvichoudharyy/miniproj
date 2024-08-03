import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/apiServices';

export const Signup =()=>{
  const navigate = useNavigate();

  const [formData, setFormData]=useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        const response=await signup(formData);
        alert("signup successfull");
        navigate('/login');
      }catch(error){
        alert("Error during Signup, please try again.");
      }
    };

  const handleChange=(e)=>{
        setFormData({
          ...formData,
          [e.target.name]:e.target.value
    });
  };
  
  return (
    <div className="main">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first">First Name:</label>
          <input 
            type="text" 
            id="first" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="last">Last Name:</label>
          <input 
            type="text" 
            id="last" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};