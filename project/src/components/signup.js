import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Signup form submitted successfully!");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required /> <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required /> <br /><br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>Already have an account?<Link to="/login">Login</Link></p>
      </div>
    </>
  );
};

export default SignupPage;