/** @format */

import {
  FC,
  ReactNode,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  useState,
  useEffect,
} from 'react';
import {
  getDefaultScheme,
  ThemeScheme,
  toggleThemeScheme,
} from '../libs/theme';
import './Button.css';
import { CSSTransition } from 'react-transition-group';

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
  const [scheme, setScheme] = useState<ThemeScheme | null>(null);
  useEffect(() => {
    setScheme(getDefaultScheme());
  }, []);
  return (
    <Button
      className="theme-button"
      variant="round"
      id="theme-scheme"
      onClick={(e) => {
        setScheme(toggleThemeScheme());
      }}
    >
      <CSSTransition
        in={scheme === 'dark'}
        timeout={10}
        classNames="theme-emoji"
        unmountOnExit
      >
        <div>🌜</div>
      </CSSTransition>
      <CSSTransition
        in={scheme === 'light'}
        timeout={10}
        classNames="theme-emoji"
        unmountOnExit
      >
        <div>🌞</div>
      </CSSTransition>
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
