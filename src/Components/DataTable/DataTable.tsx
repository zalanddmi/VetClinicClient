import { useEffect, useState } from 'react';
import { deleteObject, fetchGet, fetchPost, setPut } from '../../api/fetchData';
import { IEntity } from '../../api/serverTypes';
import { Button, Form, Popconfirm, Space, Table, Typography } from 'antd';
import { EditableCell } from './EditableCell';
import type { TRow } from './EditableCell';
import ExcelButton from '../Buttons/ExcelButton';

const PAGE_SIZE = 20;
const NON_EXISTENT_ID = '-1';

interface ITableData {
  pageNumber: number;
  totalPages: number;
  items: TRow[];
}

export interface IDataTableProps {
  entity: IEntity;
}

export const DataTable = ({ entity }: IDataTableProps) => {
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState(NON_EXISTENT_ID);
  const [data, setData] = useState<ITableData>({ pageNumber: 0, totalPages: 0, items: [] });
  const [page] = useState(1);

  const isEditing = (record: TRow) => record.id === editingId;

  const edit = (record: Partial<TRow> & { id: string }) => {
    form.setFieldsValue({ ...record });
    setEditingId(record.id!);
  };

  const cancel = () => {
    setEditingId(NON_EXISTENT_ID);
  };

  const deleteRow = (id: string) => {
    deleteObject(entity, id).then(() => {
      setData((old) => ({ ...old, items: old.items.filter((r) => r.id !== id) }));
    });
  };

  const addRow = () => {
    setEditingId(NON_EXISTENT_ID);
    setData((old) => ({ ...old, items: [{ id: NON_EXISTENT_ID }, ...old.items] }));
  };

  const save = async (id: string) => {
    console.log('save id', id);
    try {
      const row = (await form.validateFields()) as TRow;

      const newData = [...data.items];
      const index = newData.findIndex((item) => id === item.id);
      if (id !== NON_EXISTENT_ID) {
        // edit record
        const item = newData[index];
        const newItem = {
          ...item,
          ...row,
        };
        console.log('row: ', newItem);
        setPut(entity.name, newItem).then(() => {
          newData.splice(index, 1, newItem);
          setData((old) => ({ ...old, items: newData }));
          setEditingId(NON_EXISTENT_ID);
        });
      } else {
        // new record
        fetchPost(entity.name, row).then((res: string) => {
          const newId = { id: res };
          newData.splice(index, 1, { ...row, ...newId });
          setData((old) => ({ ...old, items: newData }));
          setEditingId(NON_EXISTENT_ID);
        });
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  useEffect(() => {
    fetchGet(entity.name, { PageNumber: page.toString(), PageSize: PAGE_SIZE.toString() }).then((res) => {
      setData(res || []);
    });
  }, [page, entity]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const columns = entity.fields;
  columns.push();

  const mergedColumns = [
    ...columns,
    {
      title: 'Управление',
      dataIndex: 'operation',
      editable: false,
      inputType: 'text',
      render: (_: unknown, record: TRow) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link onClick={() => save(record.id)} style={{ marginRight: 8 }}>
              Сохранить
            </Typography.Link>

            <Typography.Link onClick={cancel}>Отмена</Typography.Link>
          </span>
        ) : (
          <>
            <Typography.Link disabled={editingId !== NON_EXISTENT_ID} onClick={() => edit(record)}>
              Редактировать
            </Typography.Link>
            {' | '}
            <Popconfirm okText="Удалить" cancelText="Отмена" title="Уверены?" onConfirm={() => deleteRow(record.id)}>
              <Typography.Link>Удалить</Typography.Link>
            </Popconfirm>
          </>
        );
      },
    },
  ].map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: TRow) => ({
        record,
        inputType: col.inputType || 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <ExcelButton entity={entity} />
        <Button type="primary" onClick={addRow}>
          Добавить
        </Button>
      </Space>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data.items}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    </>
  );
};
