// import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  



  const [Title, setTitle] = useState('');
  const [content, setcontent] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/user/login', {
        Title,
        content,
      });

      localStorage.setItem('token', response.data.token);
      navigate('/'); // Redirect to home or other page
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container" >
      <h2>Create Posts</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="title"
          placeholder="title"
          value={Title}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="content"
          placeholder="content"
          value={content}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="btn btn-login">
          Add blog
        </button>
      </form>
    </div>
  );
};



export default CreatePost
