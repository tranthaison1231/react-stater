import React, { FC } from 'react';

interface Props {
  children: JSX.Element;
}

const PrivateLayout: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default PrivateLayout;
