import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link component={Button} type="primary" to="/">
            Back Home
          </Link>
        }
      />
    </div>
  );
}
