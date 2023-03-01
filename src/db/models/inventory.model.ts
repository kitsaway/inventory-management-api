"use strict";
import { Optional, UUIDV4 } from "sequelize";
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
  id?: string;
  name: string;
  price: number;
  location: string;
}

export interface InventoryInput extends Optional<InventoryAttributes, "id"> {}
export interface InventoryOutput extends Required<InventoryAttributes> {}

@Table({
  tableName: "inventories",
  timestamps: true,
  paranoid: true,
})
export default class Inventory
  extends Model<InventoryAttributes>
  implements InventoryAttributes
{
  @AllowNull(false)
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
