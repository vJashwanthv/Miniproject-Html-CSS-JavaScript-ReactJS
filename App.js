import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{10,}$/;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else if (!passwordRegex.test(password)) {
      alert("Password must contain at least 10 characters including one lowercase letter, one uppercase letter, one number, and one special character.");
    } else {
      console.log("Username:", username);
      console.log("Password:", password);
      window.location.href = "./registrationpage3.html"; // Uncomment this line for redirect
    }
  };

  return (
    <div>
      <h1>Create an Account for Free!</h1>
      <p>
        Welcome to our platform where you can unleash your potential and explore
        the wonders of math!
      </p>
      <img src="./resources/regimg1.png" alt="shapes" className="shapes-img" height="50"  width="700px"/>
      <form id="signUpForm" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="usernameSignUp">Username:</label>
        <input
          type="text"
          id="usernameSignUp"
          name="usernameSignUp"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="passwordSignUp">Create Password:</label>
        <input
          type="password"
          id="passwordSignUp"
          name="passwordSignUp"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <label htmlFor="passwordConfirm">Confirm Password:</label>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Sign Up</button>
        <p className="error-message">
          ***Note: The password must contain 10 characters. It must contain at
          least one lowercase letter, one uppercase letter, one number, and one
          special character.
        </p>
        <br />
        <a href="./registrationpage2.html">Already Have an account? Click here to sign in</a>
        <br /><br />
        <a href="./Homepage.html">Go Home</a>
      </form>
      <footer>
        <p>&copy; 2024 MathMarvels. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
