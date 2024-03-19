import { Appointments } from './Appointments/Appointments';
import { Owners } from './Owners/Owners';
import { Pets } from './Pets/Pets';
import {
  UserOutlined, MedicineBoxOutlined, TwitterOutlined, HeartOutlined,
  ExperimentOutlined, TeamOutlined, SolutionOutlined, UserSwitchOutlined, BugOutlined
} from '@ant-design/icons';
import { Procedures } from './Procedures/Procedures';
import { Drugs } from './Drugs/Drugs';
import { Users } from './Users/Users';
import { Posts } from './Posts/Posts';
import { Roles } from './Roles/Roles';
import { Species } from './Species/Species';

interface IPrivateRoute {
  name: string;
  isIndex?: boolean;
  path: string;
  element: JSX.Element;
  icon?: JSX.Element;
}

export const privateRoutes: IPrivateRoute[] = [
  {
    name: 'Приемы',
    isIndex: true,
    path: '',
    element: <Appointments />,
    icon: <MedicineBoxOutlined />,
  },
  {
    name: 'Владельцы',
    element: <Owners />,
    path: 'owners',
    icon: <UserOutlined />,
  },
  {
    name: 'Животные',
    element: <Pets />,
    path: 'pets',
    icon: <TwitterOutlined />
  },
  {
    name: 'Процедуры',
    element: <Procedures />,
    path: 'procedures',
    icon: <HeartOutlined />
  },
  {
    name: 'Лекарства',
    element: <Drugs />,
    path: 'drugs',
    icon: <ExperimentOutlined />
  },
  {
    name: 'Пользователи',
    element: <Users />,
    path: 'users',
    icon: <TeamOutlined />
  },
  {
    name: 'Должности',
    element: <Posts />,
    path: 'posts',
    icon: <SolutionOutlined />
  },
  {
    name: 'Роли',
    element: <Roles />,
    path: 'rols',
    icon: <UserSwitchOutlined />
  },
  {
    name: 'Виды животных',
    element: <Species />,
    path: 'species',
    icon: <BugOutlined />
  },
];
