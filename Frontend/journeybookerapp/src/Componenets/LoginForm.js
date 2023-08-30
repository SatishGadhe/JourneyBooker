import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const nav = useNavigate();
  const [user,setUser]=useState(null)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlelogin = async event => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8181/Users/login', formData);

      if (response.status === 200) {
        setUser(response.data);
        alert('Login successful'+response.data.role);
        if(response.data.role==="ADMIN"){
          nav("/AdminPage",{state:{user:response.data}})
        }else{
          nav("/ShowTrains",{state:{user:response.data}})
        }
        // Handle successful login, such as redirecting to a dashboard
      } else {
        const error = response.data;
        alert('Login failed: ' + error.error);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handlelogin}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={handlelogin}>
          Login
        </button>
        Don't have an account?{' '}
        <Link to="/RegistrationForm" className="text-primary fw-bold">
          Sign Up
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;

