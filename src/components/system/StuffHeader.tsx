/** @format */

import { FC } from 'react';
import Header from '../core/Header';
import ThemeSwitcher from './ThemeSwitcher';

const StuffHeader: FC = () => {
  return (
    <Header>
      <ThemeSwitcher />
    </Header>
  );
};

export default StuffHeader;
