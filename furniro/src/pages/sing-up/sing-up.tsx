import React from 'react';
import { useState } from 'react'; 

import './sing-up.css'; 
import LoginImg from "../../assets/images/loginpic.png";  
import Apple from "../../assets/images/apple.png";  
import Google  from "../../assets/images/google.png";  
import { Link } from 'react-router-dom'; 


const SignupPage: React.FC = () => {
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = async () => {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Usuário registrado:', data);
      } else {
        console.error('Erro ao registrar usuário');
      }
    };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1 className="signup-title">Get Started Now</h1>
        <p className="signup-subtitle">Enter your credentials to access your account</p>
        <form className="signup-form">
          <label htmlFor="name"><b>Name</b></label>
          <input type="text" id="name" name="name" placeholder='Enter your name' 
          value={name}
          onChange={(e) => setName(e.target.value)}
          />

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
          <button type="submit" className="signup-button" onClick={handleRegister}> Signup </button>
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

        <p className="signin-link">Have an account? <Link to='/log-in'> Sign In </Link></p>
      </div>
      <div className="signup-image">
        <img src={LoginImg} alt="Signup" />
      </div>
    </div>
  );
};

export default SignupPage;