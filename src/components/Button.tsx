/** @format */

import { FC, ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { useThemeScheme } from '../libs/theme';
import './Button.css';

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
  return (
    <BaseButton
      className="theme-button"
      id="theme-scheme"
      onClick={(e) => useThemeScheme('dark')}
    >
      {'🌜'}
      {'🌞'}
    </BaseButton>
  );
};
