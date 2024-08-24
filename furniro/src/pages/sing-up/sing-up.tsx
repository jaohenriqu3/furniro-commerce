import React from 'react';
import './sing-up.css'; 
import LoginImg from "../../assets/images/loginpic.png";  
import Apple from "../../assets/images/apple.png";  
import Google  from "../../assets/images/google.png";  
import { Link } from 'react-router-dom'; 

const SignupPage: React.FC = () => {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1 className="signup-title">Get Started Now</h1>
        <p className="signup-subtitle">Enter your credentials to access your account</p>
        <form className="signup-form">
          <label htmlFor="name"><b>Name</b></label>
          <input type="text" id="name" name="name" placeholder='Enter your name'/>

          <label htmlFor="email"><b> Email Address </b></label>
          <input type="email" id="email" name="email" placeholder='Enter your email'/>

          <label htmlFor="password"> <b>Password </b></label>
          <input type="password" id="password" name="password" placeholder='Enter your password' />
          <button type="submit" className="signup-button">Signup</button>
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