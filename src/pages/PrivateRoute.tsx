import { getToken } from '@/utils';
import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

const PrivateRoute: React.FC<RouteProps> = ({ component, path, ...rest }) => {
  const token = getToken();

  if (!token) {
    return <Redirect to="/login" />;
  }
  return <Route path={path} component={component} {...rest} />;
};

export default PrivateRoute;
