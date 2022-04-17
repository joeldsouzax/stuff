/** @format */

import { FC, ReactNode, Fragment } from 'react';

type DesignContextProps = {
  children: ReactNode;
};

const DesignContext: FC<DesignContextProps> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

export default DesignContext;
