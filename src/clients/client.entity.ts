import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Clients',
  timestamps: true,
})
export class Clients extends Model {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    unique: true,
    allowNull: false,
    comment: 'id de cliente',
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: 'nombre de cliente',
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: 'apellido de cliente',
  })
  lastname: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'edad de cliente',
  })
  age: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: 'direccion de cliente',
  })
  address: string;
}
