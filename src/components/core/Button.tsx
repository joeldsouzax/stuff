/** @format */

import { FC, MouseEventHandler, ReactNode } from 'react';

type OptionalButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className: string;
};

type ButtonProps = {
  children: ReactNode;
} & Partial<OptionalButtonProps>;

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
