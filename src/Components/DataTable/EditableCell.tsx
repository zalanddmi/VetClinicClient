import { IEntity, IField } from '../../api/serverTypes';
import { DatePicker, Form, Input, InputNumber, Select } from 'antd';
import dayjs, { Dayjs } from 'dayjs';

export interface IWithKey {
  id: string;
}

export interface IEntityCell {
  id: string;
  name: string;
  entity: string;
}

export type TRow = IWithKey & Record<string, string | number | IEntityCell | Dayjs>;

export interface IDataTableProps {
  entity: IEntity;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: string;
  inputType: IField['inputType'];
  record: TRow;
  index: number;
  children: React.ReactNode;
}

export const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  children,
  record,
  ...restProps
}: EditableCellProps) => {
  let inputNode;
  if (inputType === 'number') {
    inputNode = (
      <Form.Item
        name={dataIndex}
        style={{ margin: 0 }}
        rules={[
          {
            required: true,
            message: `Пожалуйста введите ${title}!`,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
    );
  } else if (inputType === 'date') {
    const dt = dayjs(record[dataIndex] as string);
    record[dataIndex] = dt;
    inputNode = (
      <Form.Item
        name={dataIndex}
        style={{ margin: 0 }}
        rules={[
          {
            required: true,
            message: `Пожалуйста введите ${title}!`,
          },
        ]}
      >
        <DatePicker format={'DD.MM.YYYY'} />
      </Form.Item>
    );
  } else if (inputType === 'entity') {
    const val = record[dataIndex] as IEntityCell;
    if (val) {
      // record[dataIndex] = val.id;
      inputNode = (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Пожалуйста введите ${title}!`,
            },
          ]}
          initialValue={val.id}
        >
          <Select options={[{ value: val.id, label: val.name }]} />
        </Form.Item>
      );
    }
  } else {
    inputNode = (
      <Form.Item
        name={dataIndex}
        style={{ margin: 0 }}
        rules={[
          {
            required: true,
            message: `Пожалуйста введите ${title}!`,
          },
        ]}
      >
        <Input />
      </Form.Item>
    );
  }

  return <td {...restProps}>{editing ? inputNode : children}</td>;
};
