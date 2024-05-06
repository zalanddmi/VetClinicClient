import { DataTable } from '../../Components/DataTable/DataTable';
import { IEntity } from '../../api/serverTypes';

const IProcedure: IEntity = {
    name: 'Procedure',
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
            dataIndex: 'description',
            title: 'Описание',
            editable: true,
        },
    ],
};

export const Procedures: React.FC = () => {
    return (
        <div>
            <h1>Процедуры</h1>

            <DataTable entity={IProcedure} />
        </div>
    );
};
