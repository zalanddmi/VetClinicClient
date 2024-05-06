import { DataTable } from '../../Components/DataTable/DataTable';
import { IEntity } from '../../api/serverTypes';

const IPets: IEntity = {
    name: 'Pet',
    fields: [
        {
            dataIndex: 'id',
            title: 'Идентификатор',
            hidden: true,
        },
        {
            dataIndex: 'species',
            title: 'Вид',
            editable: true,
            inputType: 'entity',
        },
        {
            dataIndex: 'name',
            title: 'Имя',
            editable: true,
        },
        {
            dataIndex: 'dateOfBirth',
            title: 'Дата рождения',
            editable: true,
            inputType: 'date',
        },
        {
            dataIndex: 'owner',
            title: 'Владелец',
            editable: true,
            inputType: 'entity',
        },
        {
            dataIndex: 'description',
            title: 'Описание',
            editable: true,
        },
    ],
};

export const Pets: React.FC = () => {
    return (
        <div>
            <h1>Животные</h1>

            <DataTable entity={IPets} />
        </div>
    );
};
