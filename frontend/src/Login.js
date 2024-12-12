import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation'; // Assuming you will create a Validation function for login
import axios from 'axios';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  // Handle form input changes
  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

  
    // Validate inputs
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Sending request with values: ", values); // Log the request data
      axios
        .post('http://localhost:5001/auth/login', values)
        .then((res) => {
          console.log('Logged in successfully', res);
          localStorage.setItem('authToken', res.data.token);  // Store the JWT token in localStorage
          navigate('/dashboard');  // Redirect to dashboard after successful login
        })
        .catch((err) => {
          console.error('Error logging in', err);
          if (err.response && err.response.data) {
            setLoginError(err.response.data.error);
          } else {
            setLoginError('An error occurred. Please try again.');
          }
        });
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2 className='d-flex justify-content-center'> Login </h2>
        <form onSubmit={handleSubmit}>
          
          <div className='mb-3'>
            <label htmlFor='email'> <strong>Email</strong></label>
            <input 
              type='email' 
              placeholder='Enter Email' 
              name='email' 
              value={values.email}
              onChange={handleInput} 
              className='form-control rounded-0' 
            />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>

          <div className='mb-3'>
            <label htmlFor='password'> <strong>Password</strong></label>
            <input 
              type='password' 
              placeholder='Enter Password' 
              name='password' 
              value={values.password}
              onChange={handleInput} 
              className='form-control rounded-0' 
            />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0'>
            <strong>Login</strong>
          </button>

          {loginError && <div className="text-danger mt-2">{loginError}</div>}

          <p>Don't have an account?</p>
          <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0'>
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
