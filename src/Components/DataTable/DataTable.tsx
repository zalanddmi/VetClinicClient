import { useEffect, useState } from 'react';
import { fetchGet } from '../../api/fetchData';
import { IEntity } from '../../api/serverTypes';
import { Table } from 'antd';

const PAGE_SIZE = 20;
interface ITableData {
  pageNumber: number;
  totalPages: number;
  items: TRow[];
}
type TRow = Record<string, string | number>;
export interface IDataTableProps {
  entity: IEntity;
}

export const DataTable = ({ entity }: IDataTableProps) => {
  const [data, setData] = useState<ITableData>({ pageNumber: 0, totalPages: 0, items: [] });
  const [page] = useState(1);
  useEffect(() => {
    fetchGet(entity.name, { PageNumber: page.toString(), PageSize: PAGE_SIZE.toString() }).then((res) => {
      setData(res || []);
    });
  }, [page, entity]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <Table dataSource={data.items} columns={entity.fields} />;
};
