import { Space } from 'antd';
import ExcelButton from '../../Components/Buttons/ExcelButton';
import { DataTable } from '../../Components/DataTable/DataTable';
import { IEntity } from '../../api/serverTypes';

const IDrugs: IEntity = {
  name: 'Drug',
  fields: [
    {
      dataIndex: 'id',
      title: 'Идентификатор',
      hidden: true,
    },
    {
      dataIndex: 'name',
      title: 'Название',
    },
    {
      dataIndex: 'cost',
      title: 'Стоимость',
    },
    {
      dataIndex: 'quantity',
      title: 'Количество',
    },
    {
      dataIndex: 'description',
      title: 'Описание',
    },
  ],
};

export const Drugs: React.FC = () => {
  return (
    <div>
      <h1>Лекарства</h1>
      <Space style={{ marginBottom: 16 }}>
        <ExcelButton entity={IDrugs} />
      </Space>
      <DataTable entity={IDrugs} />
    </div>
  );
};
