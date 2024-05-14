import { DataTable } from '../../Components/DataTable/DataTable';
import { IEntity } from '../../api/serverTypes';

const IPosts: IEntity = {
    name: 'Post',
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
            dataIndex: 'role',
            title: 'Роль',
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

export const Posts: React.FC = () => {
    return (
        <div>
            <h1>Должности</h1>

            <DataTable entity={IPosts} />
        </div>
    );
};
