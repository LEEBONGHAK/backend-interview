import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({})
export class UserModel extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.BIGINT,
  })
  id: number;

  @Column({ allowNull: true, type: DataType.BIGINT })
  email: string;

  @Column
  password: string;
}
