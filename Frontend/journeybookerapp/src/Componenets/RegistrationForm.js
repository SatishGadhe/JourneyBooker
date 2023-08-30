import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom'
const RegistrationForm = () => {

  const nav=useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        age: '',
        gender: '',
        mobileno: '',
      });
    
      const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async event => {
        event.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:8181/Users/addUsers', formData);
      
            if (response.status === 201) {
              alert('Registration successful');
              setFormData({
                username: '',
                email: '',
                password: '',
                age: '',
                gender: '',
                mobileno: '',
              });
              nav("/Login")
            } else {
              const error = response.data;
              alert('Registration failed: ' + error.error);
            }
          } catch (error) {
            console.error('Error registering:', error);
          }
        };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputusername1">UserName</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputusername1"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter UserName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputemail1">Email</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputemail1"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputpassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputpassword1"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputgender1">Gender</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputgender1"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            placeholder="Enter Gender"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputage1">Age</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputage1"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter Age"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputmobileno1">mobileNo</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputmobileno1"
            name="mobileno"
            value={formData.mobileno}
            onChange={handleChange}
            placeholder="Enter mobileNo"
          />
        </div>

         <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> 
        <button type="submit" className="btn btn-primary" onclick={handleSubmit}>
          Submit
        </button>
        Already have an account??{" "}
        <Link to={"/Login"} className="text-primary fw-bold">
             Sign In
        </Link>
      </form>
    </div>
  );
};


export default RegistrationForm;
