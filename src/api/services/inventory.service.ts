import * as inventoryDal from "../../db/dal/inventory.dal";
import { InventoryInput, InventoryOutput } from "db/models/inventory.model";
import { getOutput } from "../../db/dal/inventory.dal";

export const create = (payload: InventoryInput): Promise<InventoryOutput> => {
  return inventoryDal.create(payload);
};

export const deleteById = (id: string): Promise<boolean> => {
  return inventoryDal.deleteById(id);
};

export const getAll = (
  size: number,
  page: number,
  filter?: string
): Promise<getOutput> => {
  return inventoryDal.getAll(size, page, filter);
};
