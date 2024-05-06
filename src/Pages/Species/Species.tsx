import { DataTable } from '../../Components/DataTable/DataTable';
import { IEntity } from '../../api/serverTypes';

const ISpecies: IEntity = {
    name: 'Species',
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
    ],
};

export const Species: React.FC = () => {
    return (
        <div>
            <h1>Виды животных</h1>

            <DataTable entity={ISpecies} />
        </div>
    );
};
