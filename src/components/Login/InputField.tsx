import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className, type = 'text', label, id, ...props }, ref) => {
    return (
      <div className="w-full">
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        <input
          id={id}
          type={type}
          placeholder={label}
          ref={ref}
          className={cn(
            "h-10 w-full border-0 border-b border-input bg-transparent pb-2 pt-2 text-sm text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:border-primary",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
InputField.displayName = "InputField";

export default InputField;
