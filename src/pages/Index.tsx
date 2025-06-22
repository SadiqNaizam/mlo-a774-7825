import * as React from 'react';
import LoginCard from '@/components/Login/LoginCard';
import LoginLayout from '@/components/layout/LoginLayout';

/**
 * The main login page for the application.
 * It utilizes a centered layout to display the login card.
 */
const LoginPage: React.FC = () => {
  return (
    <LoginLayout>
      <LoginCard />
    </LoginLayout>
  );
};

export default LoginPage;
