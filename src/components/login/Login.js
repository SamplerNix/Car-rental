import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Link } from 'react-router-dom';
import { doSigninWithEmailAndPassword } from '../../Firebase/auth'; // corrected import
// import { useAuth } from '../../Context/authContext';

function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    // const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const togglePassword = () => {
        setShowPassword((prev) => !prev);
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            setErrorMessage('');
            try {
                await doSigninWithEmailAndPassword(email, password);
                navigate('../home', { state: { email } });
            } catch (err) {
                setErrorMessage(err.message);
            }
            setIsSigningIn(false);
        }
    };    
    
    return (
        <div className="login-background">
            <div className="login-container">
                <h2>Login</h2>

                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="login-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="login-label">Password</label>
                        <div className="password-input-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span onClick={togglePassword} className="eye-icon">
                {showPassword ? '👁️' : '🙈'}
              </span>
                        </div>
                    </div>

                    {errorMessage && <div className="error-text">{errorMessage}</div>}

                    <button type="submit" disabled={isSigningIn}>
                        {isSigningIn ? 'Signing in...' : 'Login'}
                    </button>
                </form>

                <div className="secondary-text">Forgot your password?</div>

                <div className="signup-text">
                    Don’t have an account? <Link to="/signup">Sign up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
