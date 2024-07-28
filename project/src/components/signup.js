import React from "react";
import "./common/Signup.css";
import { Link } from "react-router-dom";

//alert
const SignupForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Signup form submitted successfully!");
  };

  return (
    <>
      {/* Form  */}

      <form onSubmit={handleSubmit}>
        {/* Ye ek event handler attribute hai. Jab form submit hoga, tab handleSubmit naam ka JavaScript function call hoga. */}

        <div className="form-group">
          <label type="First Name">First Name</label>
          <input type="text" id="Firstname" name="FirstName" required />
        </div>

        <div className="form-group">
          <label type="Last Name">Last Name</label>
          <input type="text" id="Last Name" name="Last Name" required />
        </div>

        <div className="form-group">
                <label type="email">Email</label>
                <input type="email" id="email" name="email" required />
        </div>
            
        <div className="form-group">
            <label type="password">Password</label>
            <input type="password" id="password" name="password" required/>
        </div>
         
        <div className="form-group">
            <label type="Cpassword">Confirm-Password</label>
            <input type="password" id="Cpassword" name="Cpassword" required/>
        </div>

          <br></br> 
   
      <button>Submit</button>

      </form>
      <div>
        <p>Kya aapka account already h?<Link to="/login">Login</Link></p>
    </div>

    </>
  );
};

export default SignupForm;