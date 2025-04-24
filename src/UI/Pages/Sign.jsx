import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Sign = ({theme}) => {
  const REGISTER_URL = import.meta.env.VITE_REGISTER_URL;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const { confirmPassword, ...submitData } = formData; 

      const response = await axios.post(REGISTER_URL, submitData);

      if (response.status === 201) {
        setSuccess('Sign Up Successful! Redirecting...');
        setFormData({ email: '', password: '', confirmPassword: '' });

        setTimeout(() => {
          navigate('/login'); // Redirect to login page
        }, 2000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center"style={{ backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "#fff"
     }}>
      <div className="p-8 rounded-lg shadow-lg w-full max-w-md"style={{ backgroundColor: theme === "light" ? "white" : "#333",
      color: theme === "light" ? "black" : "#fff"
     }}>
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Sign Up to Paint Shop
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
              style={{ backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "#fff"
               }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
              style={{ backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "#fff"
               }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
              style={{ backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "#fff"
               }}
            />
          </div>

          <Link to="/login" className="text-sm text-blue-500 hover:underline">
            Already have an account? logIn
          </Link>

          <button type="submit" className="btn btn-success w-full" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sign;
