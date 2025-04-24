import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ theme,login }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const LOGIN_URL =  `${import.meta.env.VITE_LOGIN_URL}`; // Define your API endpoint

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(LOGIN_URL, { email, password });

      if (response.status === 200) {
        login(response.data.accessToken, response.data.refreshToken); // Store tokens
        alert('Logged in successfully!');
        navigate('/cart');}
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "#fff"
     }}>
      <div className="w-full max-w-md p-8 space-y-6 rounded-lg shadow-md" style={{ backgroundColor: theme === "light" ? "#e5e6e6" : "#333",
      color: theme === "light" ? "black" : "#fff"
     }}>
        <h2 className="text-3xl font-bold text-center">Login</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="form-control">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full " style={{ backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "#fff"
               }}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-control">
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full " style={{ backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "#fff"
               }}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-control">
            <Link to="/sign" className="mt-5 mb-2 text-sm text-blue-500 hover:underline">
              Don't have an account? Register
            </Link>
            <button type="submit" className="btn btn-success w-full mt-1">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
