import React, {useState} from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
function Signup() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };
    return (
        <div className="signup-background">
            <div></div>

            <div className="login-container">
                <h2>Sign up</h2>

                <div className="form-group">
                    <label htmlFor="username" className="signup-label">E-mail</label>
                    <input type="text" id="username" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="signup-label">Password</label>
                    <div className="password-input-wrapper"> {/* Wrap input + icon */}
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
                <button>Continue</button>

                <div className="secondary-text">Forgot your password?</div>

                <div className="signup-text">
                    Already have an account?<Link to="/login">Log in</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
