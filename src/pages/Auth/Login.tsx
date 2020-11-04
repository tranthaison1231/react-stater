import React from 'react';
import { LoginForm } from '@/components/Form';
import { PublicLayout } from '@/components/Layout';
import { login } from '@/redux/auth';
import { useAppDispatch } from '@/redux/store';
import { Image, Row } from 'antd';

export default function Login() {
  const dispatch = useAppDispatch();

  const handleLogin = values => {
    dispatch(login(values));
  };
  return (
    <PublicLayout>
      <Row>
        <Image
          src={require('../../assets/images/login.png')}
          height="100vh"
          width="65%"
        />
        <LoginForm login={handleLogin} />
      </Row>
    </PublicLayout>
  );
}
