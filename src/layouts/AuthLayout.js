import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const AuthLayout = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';

  return (
    <div className="auth-layout min-h-screen flex justify-center items-center">
      <div className="auth-container w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4">{ isLoginPage ? 'Welcome Back' : 'Welcome'}</h2>
          <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
