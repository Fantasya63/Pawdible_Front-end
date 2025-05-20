import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface RequireLoginProps {
  children: React.ReactNode;
}

const RequireLogin: React.FC<RequireLoginProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return <>{children}</>;
};

export default RequireLogin;
