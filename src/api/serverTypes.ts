export interface IField {
  dataIndex: string;
  title: string;
  hidden?: boolean;
}

type TEntity = 'Drug'; // "Entity1" | "Entity2" и т.д.

export interface IEntity {
  name: TEntity;
  fields: IField[];
}
