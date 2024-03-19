import { useUserStore } from '../../store/userStore';
import { LogoutOutlined } from '@ant-design/icons';
import { Button, Space, Layout } from 'antd';

import styles from './topHeader.module.scss';

const { Header } = Layout;

export const TopHeader = () => {
  const [user, logout] = useUserStore((state) => [state.user, state.logout]);
  return (
    <Header className={styles.header}>
      <div className={styles.logo}>ИС «Ветклиника+»</div>

      <Space>
        <Button type="link" onClick={logout} shape="circle" icon={<LogoutOutlined />}>
          {user?.name}
        </Button>
      </Space>
    </Header>
  );
};
