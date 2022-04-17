/** @format */

import { FC, ReactNode } from 'react';

type HeaderProps = {
  children: ReactNode;
};

const Header: FC<HeaderProps> = ({ children }) => {
  return <header className="flex">{children}</header>;
};

export default Header;
