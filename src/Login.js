import logo from './logo.svg';
import './App.css';
import './styles.css'
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogin = async () => {
    
    try {

      const response = await axios.post('your_login_api_endpoint', {
        username,
        password,
        rememberMe,
      });

      
    } catch (error) {
      
      console.error('Login failed:', error.message);
    }
  };
  return (
    <div className="box-form">
    <div className="left">
      <div className="overlay">
        <h1>SKY</h1>
        <br/>
        <h4 style={{marginLeft:"80px"}}>Believe in Better</h4>
        <span></span>
      </div>
    </div>

    <div className="right">
      <h1>Book My Space</h1>
      <p>
        Don't have an account? <a href="#">Create Your Account</a> it takes
        less than a minute
      </p>
      <div className="inputs">
        <input
          type="text"
          placeholder="user name"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <br />
      <div className="remember-me--forget-password">
        <label>
          <input
            type="checkbox"
            name="item"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <span className="text-checkbox">Remember me</span>
        </label>
        <p>forget password?</p>
      </div>

      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  </div>
  );
}

export default Login;
