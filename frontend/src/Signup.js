import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Mise à jour de l'état des champs de formulaire
  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validation des valeurs
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    // Si aucune erreur, envoi de la requête
    if (!validationErrors.name && !validationErrors.email && !validationErrors.password) {
      axios.post('http://localhost:5001/users', values)
        .then(res => {
          console.log('Utilisateur inscrit avec succès', res);
          navigate('/'); // Redirige vers la page d'accueil ou login
        })
        .catch(err => {
          console.log('Erreur lors de l\'inscription', err);
        });
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2 className='d-flex justify-content-center'> Sign Up </h2>
        <form onSubmit={handleSubmit}>

          <div className='mb-3'>
            <label htmlFor='name'> <strong>Name</strong></label>
            <input 
              type='text' 
              placeholder='Enter Name' 
              name='name' 
              value={values.name}
              onChange={handleInput} 
              className='form-control rounded-0' 
            />
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>

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
              placeholder='Enter password' 
              name='password' 
              value={values.password}
              onChange={handleInput} 
              className='form-control rounded-0' 
            />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0'>
            <strong>Sign up</strong>
          </button>
          <p>You agree to our terms and policies</p>
          <Link to="/" className='btn btn-default border w-100 bg-light rounded-0'>
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
