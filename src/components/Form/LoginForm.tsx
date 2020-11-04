import React, { FC } from 'react';
import { Button, Form, Image, Input, Typography } from 'antd';

import { useTranslation } from 'react-i18next';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { LoginDto } from '@/api/auth';

interface Props {
  login?: (values: LoginDto) => void;
}

const { Title } = Typography;

const LoginForm: FC<Props> = ({ login }) => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: 30, width: '35%' }}>
      <Image alt="" src={require('../../assets/images/logo.png')} />
      <div style={{ marginTop: 100 }}>
        <Title>{t('common.title')}</Title>
        <Title level={3}>{t('common.botTitle')}</Title>
      </div>
      <Form
        layout="vertical"
        onFinish={login}
        style={{ marginTop: 30 }}
        requiredMark="optional"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: t('validate.email') }]}
        >
          <Input size="large" prefix={<MailOutlined />} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: t('validate.password') }]}
        >
          <Input size="large" type="password" prefix={<LockOutlined />} />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ width: '100%', marginTop: 20 }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
