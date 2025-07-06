import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="login-background">
            <div></div>

            <div className="login-container">
                <h2>Login</h2>

                <div className="form-group">
                    <label htmlFor="username" className="login-label">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" />
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="login-label">Password</label>
                    <div className="password-input-wrapper">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            placeholder="Enter your password"
                        />
                        <span onClick={togglePassword} className="eye-icon">
              {showPassword ? '👁️' : '🙈'}
            </span>
                    </div>
                </div>

                <button>Login</button>

                <div className="secondary-text">Forgot your password?</div>

                <div className="signup-text">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
