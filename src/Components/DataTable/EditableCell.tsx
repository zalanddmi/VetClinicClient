import { IEntity } from '../../api/serverTypes';
import { Form, Input, InputNumber } from 'antd';

export interface IWithKey {
  id: string;
}

export type TRow = IWithKey & Record<string, string | number>;

export interface IDataTableProps {
  entity: IEntity;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: string;
  inputType: 'number' | 'text';
  record: TRow;
  index: number;
  children: React.ReactNode;
}

export const EditableCell = ({ editing, dataIndex, title, inputType, children, ...restProps }: EditableCellProps) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
