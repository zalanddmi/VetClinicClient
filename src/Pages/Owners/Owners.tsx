import { DataTable } from '../../Components/DataTable/DataTable';
import { IEntity } from '../../api/serverTypes';

const IOwner: IEntity = {
  name: 'Owner',
  fields: [
    {
      dataIndex: 'id',
      title: 'Идентификатор',
      hidden: true,
    },
    {
      dataIndex: 'fio',
      title: 'ФИО',
      editable: true,
    },
    {
      dataIndex: 'phoneNumber',
      title: 'Телефон',
      editable: true,
    },
    {
      dataIndex: 'email',
      title: 'Почта',
      editable: true,
    },
  ],
};

export const Owners: React.FC = () => {
  return (
    <div>
      <h1>Владельцы</h1>

      <DataTable entity={IOwner} />
    </div>
  );
};
