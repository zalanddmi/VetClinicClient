import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { privateRoutes } from '../../Pages/routes';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const items: MenuProps['items'] = privateRoutes.map((r, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: r.icon,
    label: <Link to={r.path}>{r.name}</Link>,
  };
});

export const Side = () => {
  return (
    <Sider collapsible width={200} theme="light">
      <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }} items={items} />
    </Sider>
  );
};
