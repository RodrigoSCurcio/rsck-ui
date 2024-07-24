import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps): ReactNode => {
  return (
    <button
      className="bg-op-navy-blue font-bold flex items-center gap-1 rounded-lg p-1.5 transition ease-in-out shadow-sm shadow-op-royal-blue hover:shadow-md hover:shadow-op-white hover:bg-op-royal-blue"
      {...rest}
    >
      {children}
    </button>
  );
};
