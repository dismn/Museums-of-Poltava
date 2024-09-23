import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.scss';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    museumName: '',
    date: '',
    mobileNumber: '',
    comment: '',
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4444/contacts', formData);
      console.log(response.data);
      alert('User registered successfully');
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error('There was an error registering the user!', error);
        alert('Failed to register user');
      }
    }
  };

  return (
    <div className="container-register">
      <h3>Реєстрація на екскурсію та зворотній зв'язок:</h3>
      <div className="register-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Ім'я:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Назва музею:</label>
            <input type="text" name="museumName" value={formData.museumName} onChange={handleChange} required />
          </div>
          <div>
            <label>Дата:</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          <div>
            <label>Номерт телефону:</label>
            <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
          </div>
          <div>
            <label>Коментар:</label>
            <input type="text" name="comment" value={formData.comment} onChange={handleChange} />
          </div>
          <button type="submit">Надіслати</button>
          {errors.length > 0 && (
            <div>
              <h3>Validation Errors</h3>
              <ul>
                {errors.map((error, index) => (
                  <li key={index}>{error.msg}</li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
