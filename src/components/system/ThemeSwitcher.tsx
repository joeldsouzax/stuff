/** @format */

import { FC } from 'react';
import Button from '../core/Button';
import { themeChangeFlow } from '../core/utils';

const ThemeSwitcher: FC = () => {
  return <Button onClick={(e) => themeChangeFlow('dark')}>hello</Button>;
};

export default ThemeSwitcher;
