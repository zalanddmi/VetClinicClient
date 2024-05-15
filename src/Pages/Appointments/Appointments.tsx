import { DataTable } from '../../Components/DataTable/DataTable';
import { IEntity } from '../../api/serverTypes';

const IAppointments: IEntity = {
  name: 'Appointment',
  fields: [
    {
      dataIndex: 'id',
      title: 'Идентификатор',
      hidden: true,
    },
    {
      dataIndex: 'procedure',
      title: 'Процедура',
      editable: true,
      inputType: 'entity',
    },
    {
      dataIndex: 'pet',
      title: 'Животное',
      editable: true,
      inputType: 'entity',
    },
    {
      dataIndex: 'doctor',
      title: 'Врач',
      editable: true,
      inputType: 'entity',
    },
    // пока без лекарств
    {
      dataIndex: 'dateAppointment',
      title: 'Дата приема',
      editable: true,
      inputType: 'date',
    },
    {
      dataIndex: 'status',
      title: 'Статус приема',
      editable: true,
      inputType: 'status',
    },
    {
      dataIndex: 'dateCompleted',
      title: 'Дата завершения',
      editable: false,
      inputType: 'text',
    },
    {
      dataIndex: 'totalCost',
      title: 'Стоимость',
      editable: false,
      inputType: 'number',
    },
    {
      dataIndex: 'description',
      title: 'Описание',
      editable: true,
    },
  ],
};

export const Appointments: React.FC = () => {
  return (
    <div>
      <h1>Приемы</h1>

      <DataTable entity={IAppointments} />
    </div>
  );
};
