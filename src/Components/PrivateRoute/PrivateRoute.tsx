import { ReactNode } from 'react';
import { useUserStore } from '../../store/userStore';
import { Navigate, Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { TopHeader } from '../TopHeader/TopHeader';
import { Side } from '../Side/Side';

const { Content } = Layout;

interface IProtectedRouteProps {
  redirectPath?: string;
  children?: ReactNode;
}

export const PrivateRoute = ({ redirectPath = '/login' }: IProtectedRouteProps) => {
  const user = useUserStore((state) => state.user);
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <TopHeader />
      <Layout>
        <Side />
        <Layout style={{ padding: '0 24px 24px 24px' }}>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
