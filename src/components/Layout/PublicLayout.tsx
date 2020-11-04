import React, { FC } from 'react';

interface Props {
  children: JSX.Element;
}

const PublicLayout: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default PublicLayout;
