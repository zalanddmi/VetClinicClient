import { Navigate } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import { Button, Form, Input, message } from 'antd';
import classes from './Login.module.scss';

interface ILoginFields {
  username: string;
  password: string;
}

export const Login = () => {
  const [user, login] = useUserStore((state) => [state.user, state.login]);
  const [form] = Form.useForm();

  const onFinish = ({ password, username }: ILoginFields) => {
    if (password === '1' && username === '1') {
      login({ name: 'test user', token: '--', role: '--' });
    } else {
      message.error('Неверное имя пользователя и пароль');
    }
  };

  if (user) {
    return <Navigate to={'/'} replace />;
  }

  return (
    <div className={classes.login}>
      <div className={classes.form}>
        <h1>ИС «Ветклиника+»</h1>
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<ILoginFields>
            label={'Пользователь'}
            name="username"
            rules={[{ required: true, message: 'Обязательно' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<ILoginFields>
            label={'Пароль'}
            name="password"
            rules={[{ required: true, message: 'Обязательно' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
