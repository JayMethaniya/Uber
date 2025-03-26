import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProtectedWrapperProps {
  children: React.ReactNode;
}

const CaptainProtectedWrapper: React.FC<ProtectedWrapperProps> = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/captain-login');
    }
  }, [navigate]);

  axios.get('http://localhost:4000/captains/profile', {
    headers:{
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then((response) => {
    if (response.status !== 200) {
      navigate('/captain-login');
    }
  }).catch((err) => {
    console.log(err);
    localStorage.removeItem('token');
    navigate('/captain-login');
  });



  const token = localStorage.getItem('token');
  if (!token) return null;

  return <>{children}</>;
};

export default CaptainProtectedWrapper;