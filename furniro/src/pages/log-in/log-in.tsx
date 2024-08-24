import React from 'react'; 
import { useState } from 'react';

import { Link } from 'react-router-dom';  
import './log-in.css';
import LoginImg from "../../assets/images/loginpic.png";  
import Apple from "../../assets/images/apple.png";  
import Google  from "../../assets/images/google.png";  


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email_addres: email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Login successful');
      console.log(data); // Fazer algo com os dados do usuário autenticado
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1 className="signup-title">Welcome back!</h1>
        <p className="signup-subtitle">Enter your Credentials to access your account</p>
        <form className="signup-form">
          <label htmlFor="email"><b> Email Address </b></label>
          <input type="email" id="email" name="email" placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password"> <b>Password </b></label>
          <input type="password" id="password" name="password" placeholder='Enter your password' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="signup-button" onClick={handleSubmit}>Signup</button>
        </form>
        <div className="terms">
            <input type="checkbox" id="terms" name="terms" />
            <label htmlFor="terms">I agree to the <a href=""> terms & policy </a></label>
          </div>

        <div className="divider">
          <span>or</span>
        </div>

        <div className="social-buttons">
          <button className="social-button">
            <img src={Apple} alt="Apple" />
            Sign in with Apple
          </button>
          <button className="social-button">
            <img src={Google} alt="Google" />
            Sign in with Google
          </button>
        </div>

        <p className="signin-link">Don’t have an account? <Link to='/sing-up'> Sign Up </Link></p>
      </div>
      <div className="signup-image">
        <img src={LoginImg} alt="Signup" />
      </div>
    </div>
  );
};

export default Login;