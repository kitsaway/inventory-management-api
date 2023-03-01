import * as inventoryDal from "../../db/dal/inventory.dal";
import { InventoryInput, InventoryOutput } from "db/models/inventory.model";

export const create = (payload: InventoryInput): Promise<InventoryOutput> => {
  return inventoryDal.create(payload);
};

export const deleteById = (id: string): Promise<boolean> => {
  return inventoryDal.deleteById(id);
};

export const getAll = (filter?: string): Promise<InventoryOutput[]> => {
  return inventoryDal.getAll(filter);
};
