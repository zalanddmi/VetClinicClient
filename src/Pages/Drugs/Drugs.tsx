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
      editable: true,
    },
    {
      dataIndex: 'cost',
      title: 'Стоимость',
      inputType: 'number',
      editable: true,
    },
    {
      dataIndex: 'quantity',
      title: 'Количество',
      inputType: 'number',
      editable: true,
    },
    {
      dataIndex: 'description',
      title: 'Описание',
      editable: true,
    },
  ],
};

export const Drugs: React.FC = () => {
  return (
    <div>
      <h1>Лекарства</h1>

      <DataTable entity={IDrugs} />
    </div>
  );
};
