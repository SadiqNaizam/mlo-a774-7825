import * as React from 'react';
import { cn } from '@/lib/utils';

interface LoginLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const LoginLayout: React.FC<LoginLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'grid h-screen w-full place-items-center p-4',
        className
      )}
    >
      {children}
    </main>
  );
};

export default LoginLayout;
