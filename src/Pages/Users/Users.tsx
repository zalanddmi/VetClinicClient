import { DataTable } from '../../Components/DataTable/DataTable';
import { IEntity } from '../../api/serverTypes';

const IUsers: IEntity = {
    name: 'User',
    fields: [
        {
            dataIndex: 'id',
            title: 'Идентификатор',
            hidden: true,
        },
        {
            dataIndex: 'userName',
            title: 'Логин',
            editable: true,
        },
        {
            dataIndex: 'fio',
            title: 'Имя',
            editable: true,
        },
        {
            dataIndex: 'phoneNumber',
            title: 'Номер телефона',
            editable: true,
        },
        {
            dataIndex: 'email',
            title: 'Электронная почта',
            editable: true,
        },
        {
            dataIndex: 'post',
            title: 'Должность',
            editable: true,
            inputType: 'entity',
        },
    ],
}

export const Users: React.FC = () => {
    return (
        <div>
            <h1>Пользователи</h1>

            <DataTable entity={IUsers} />
        </div>
    );
};
