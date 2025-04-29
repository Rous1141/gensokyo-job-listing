import React, { useState } from 'react';
import { Button, Card, Form, Input, Typography } from 'antd';
import { AccountPropsCreate } from '../api/Account/IAccount';
import { RegisterAccount } from '../api/Account/AccountAPI';
import registerImage from '/img/register.png';
import styles from '../css/registerform.module.css';
import { Link, useNavigate } from 'react-router';

const { Title, Text } = Typography;

type RegisterFormProps = {
  email: string;
  username: string;
  name: string;
  password: string;
  confirmPassword: string;
};

const Register: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  const nav = useNavigate()

  const registerAccount = async (values: RegisterFormProps) => {
    setIsLoading(true);
    const accountData: AccountPropsCreate = {
      createdAt: new Date(),
      email: values.email,
      name: values.name,
      avatar: '',
      username: values.username,
      password: values.password,
      isActive: true,
      role: 'user',
    };

    try {
      const response = await RegisterAccount(accountData);
      if (response) {
        console.log('Account created successfully:', response);
        alert('Account created successfully');
        form.resetFields();
        nav("/login")
      } else {
        console.error('Error creating account:', response);
        alert('Error creating account');
      }
    } catch (error) {
      console.error('Registration Error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.background}>
      <img
        src={registerImage}
        alt="Suzunaan Background"
        className={styles.backgroundImage}
      />
      <div className={styles.container}>
        <Card className={styles.registerCard}>
          <Title level={2} className={styles.title}>
            Register for Gensokyo Job Helper
          </Title>
          <Text className={styles.description}>
            Create an account to access job opportunities.
          </Text>
          <Form
            form={form}
            name="register"
            onFinish={registerAccount}
            layout="vertical"
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please enter your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]}
            >
              <Input placeholder="Email" size="large" />
            </Form.Item>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please enter your username!' }]}
            >
              <Input placeholder="Username" size="large" />
            </Form.Item>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please enter your name!' }]}
            >
              <Input placeholder="Full Name" size="large" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please enter your password!' },
                { min: 6, message: 'Password must be at least 6 characters!' },
              ]}
            >
              <Input.Password placeholder="Password" size="large" />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm Password" size="large" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className={styles.submitButton}
                loading={isLoading}
              >
                Register
              </Button>
            </Form.Item>
            <Typography className={styles.registerLink}>
                <Link to="/login">Don't have an account? Register here</Link>
              </Typography>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Register;