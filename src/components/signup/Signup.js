import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword } from '../../Firebase/auth'; // Your helper function

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!email || !password) {
            setErrorMessage('Email and password are required.');
            return;
        }

        try {
            setIsSigningUp(true);
            await doCreateUserWithEmailAndPassword(email, password);
            navigate('/'); // Redirect to homepage or dashboard
        } catch (err) {
            setErrorMessage(err.message);
        } finally {
            setIsSigningUp(false);
        }
    };

    return (
        <div className="signup-background">
            <div className="login-container">
                <h2>Sign Up</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="signup-label">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="signup-label">Password</label>
                        <div className="password-input-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span onClick={togglePassword} className="eye-icon">
                {showPassword ? '👁️' : '🙈'}
              </span>
                        </div>
                    </div>

                    {errorMessage && <div className="error-text">{errorMessage}</div>}

                    <button type="submit" disabled={isSigningUp}>
                        {isSigningUp ? 'Creating Account...' : 'Continue'}
                    </button>
                </form>

                <div className="secondary-text">Forgot your password?</div>

                <div className="signup-text">
                    Already have an account? <Link to="/login">Log in</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
