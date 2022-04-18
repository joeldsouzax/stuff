/** @format */

import {
  FC,
  ReactNode,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  useState,
  useEffect,
} from 'react';
import { getDefaultScheme, ThemeScheme, useThemeScheme } from '../libs/theme';
import './Button.css';

export type ButtonVariant = 'standard' | 'round';

type BaseButtonProps = {
  children: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const BaseButton: FC<BaseButtonProps> = ({ children, id, ...props }) => {
  return (
    <button id={`${id}-button`} {...props}>
      {children}
    </button>
  );
};

export const ThemeButton: FC = () => {
  const [scheme, setScheme] = useState<ThemeScheme>('dark');
  useEffect(() => {
    setScheme(getDefaultScheme('dark'));
  }, []);
  return (
    <Button
      className="theme-button"
      variant="round"
      id="theme-scheme"
      onClick={(e) => {
        setScheme(useThemeScheme('dark'));
      }}
    >
      {scheme === 'dark' ? '🌜' : '🌞'}
    </Button>
  );
};

type OptionalButtonProps = {
  variant: ButtonVariant;
};

type ButtonProps = Partial<OptionalButtonProps> & BaseButtonProps;

export const Button: FC<ButtonProps> = ({
  children,
  id,
  className,
  variant = 'standard',
  ...props
}) => {
  return (
    <BaseButton
      className={`${className} ${variant}-button`}
      id={`${id}-${variant}`}
      {...props}
    >
      {children}
    </BaseButton>
  );
};

// standard and round
// primary
