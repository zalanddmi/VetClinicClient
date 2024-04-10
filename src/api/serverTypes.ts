export interface IField {
  dataIndex: string;
  title: string;
  hidden?: boolean;
  editable?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (_a: any, _b: any) => any;
  inputType?: 'text' | 'number';
}

type TEntity = 'Drug'; // "Entity1" | "Entity2" и т.д.

export interface IEntity {
  name: TEntity;
  fields: IField[];
}
