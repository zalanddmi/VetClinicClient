import { DataTable } from '../../Components/DataTable/DataTable';
import { IEntity } from '../../api/serverTypes';

const IRole: IEntity = {
    name: 'Role',
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
            dataIndex: 'description',
            title: 'Описание',
            editable: true,
        },
    ],
};

export const Roles: React.FC = () => {
    return (
        <div>
            <h1>Роли</h1>

            <DataTable entity={IRole} />
        </div>
    );
};
