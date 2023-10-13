import React from 'react';
import './style.css';
export default function Home() {
  return (
    <div className="box-form">
      <div className="left">
        <div className="overlay">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et est sed felis aliquet sollicitudin.
          </p>
          <span>
            <p>login with social media</p>
            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>
          </span>
        </div>
      </div>

      <div className="right">
        <h5>Login</h5>
        <p>Don't have an account? <a href="#">Create Your Account</a> - it takes less than a minute.</p>
        <div className="inputs">
          <input type="text" placeholder="user name" />
          <br />
          <input type="password" placeholder="password" />
        </div>

        <br /><br />

        <div className="remember-me--forget-password">
          <label>
            <input type="checkbox" name="item" checked />
            <span className="text-checkbox">Remember me</span>
          </label>
          <p>Forgot password?</p>
        </div>

        <br />
        <button>Login</button>
      </div>
    </div>
  );
}
