export interface IField {
  dataIndex: string;
  title: string;
  hidden?: boolean;
  editable?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (_a: any, _b: any) => any;
  inputType?: 'text' | 'number' | 'date' | 'entity' | 'status';
}

type TEntity = 'Drug' | 'Species' | 'Role' | 'Owner' | 'Procedure' | 'Pet' | 'Post' | 'User' | 'Appointment'; // "Entity1" | "Entity2" и т.д.

export interface IEntity {
  name: TEntity;
  fields: IField[];
}
