import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProtectedWrapperProps {
  children: React.ReactNode;
}

const UserProtectedWrapper: React.FC<ProtectedWrapperProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const token = localStorage.getItem('token');
  if (!token) return null;

  return <>{children}</>;
};

export default UserProtectedWrapper;