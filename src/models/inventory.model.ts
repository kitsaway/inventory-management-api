"use strict";
import { UUIDV4 } from "sequelize";
import {
  Model,
  Table,
  Column,
  PrimaryKey,
  AllowNull,
  NotEmpty,
  DataType,
} from "sequelize-typescript";

export interface InventoryAttributes {
  id: string;
  name: string;
  price: number;
  location: string;
}

@Table({
  tableName: "inventory",
  timestamps: true,
  paranoid: true,
})
export default class Inventory
  extends Model<InventoryAttributes>
  implements InventoryAttributes
{
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: UUIDV4,
  })
  id!: string;

  @AllowNull(false)
  @NotEmpty
  @Column
  name!: string;

  @AllowNull(false)
  @NotEmpty
  @Column(DataType.DOUBLE)
  price!: number;

  @AllowNull(false)
  @NotEmpty
  @Column
  location!: string;
}
