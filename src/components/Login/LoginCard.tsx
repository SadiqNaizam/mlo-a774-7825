import * as React from 'react';

import InputField from './InputField';
import LoginButton from './LoginButton';

const LoginCard: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle the login logic here.
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="bg-card text-card-foreground w-full p-8 rounded-lg shadow-sm max-w-[350px]">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-card-foreground">
          Welcome
        </h1>

        <form onSubmit={handleSubmit} className="w-full mt-8">
          <div className="space-y-6">
            <InputField
              id="email"
              label="Email Address"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <div>
              <InputField
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <a href="#" className="block mt-2 text-xs font-medium text-muted-foreground hover:text-primary hover:underline">
                Forgot Password
              </a>
            </div>
          </div>
            
          <LoginButton type="submit" className="mt-6">
            Login
          </LoginButton>
        </form>

        <p className="mt-8 text-sm text-muted-foreground">
          Don't have an account?{' '}
          <a href="#" className="font-medium text-primary hover:underline">
            SignUp
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginCard;
