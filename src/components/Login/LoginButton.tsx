import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export interface LoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const LoginButton: React.FC<LoginButtonProps> = ({ className, children, ...props }) => {
  return (
    <Button
      className={cn(
        'w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg py-5 text-sm font-semibold',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

LoginButton.displayName = "LoginButton";

export default LoginButton;
