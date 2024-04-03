import { Navigate } from 'react-router-dom';
import { useUserStore } from '../../store/userStore';
import { Button, Form, Input, message } from 'antd';
import classes from './Login.module.scss';
import { fetchPost } from '../../api/fetchData';
import jwt_decode from 'jwt-decode';

interface ILoginFields {
  userName: string;
  password: string;
}

interface IAuthResponse {
  fio: string;
  token: string;
}

const MS_NAME = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name';
const MS_ROLE = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';

interface IJwtO {
  exp: number;
  auth: string;
  iss: number;
  [MS_NAME]: string;
  [MS_ROLE]: string;
}

export const Login = () => {
  const [user, login] = useUserStore((state) => [state.user, state.login]);
  const [form] = Form.useForm();

  const onFinish = (values: ILoginFields) => {
    fetchPost('Account/login', { ...values, rememberMe: true }).then((res) => {
      const token = (res as IAuthResponse)?.token;
      if (token) {
        const decoded: IJwtO = jwt_decode(token);
        if (decoded) {
          console.log('Decoded: ', decoded);
          login({ name: decoded[MS_NAME], token: token, role: decoded[MS_ROLE] });
        } else {
          message.error('Ошибка сервера');
        }
      }
    });
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
            name="userName"
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
