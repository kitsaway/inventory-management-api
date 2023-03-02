import Inventory, {
  InventoryInput,
  InventoryOutput,
} from "../models/inventory.model";

export interface getOutput {
  rows: InventoryOutput[];
  count: number;
}

export const create = async (
  payload: InventoryInput
): Promise<InventoryOutput> => {
  const inventory = await Inventory.create(payload);
  return inventory;
};

export const deleteById = async (id: string): Promise<boolean> => {
  const deletedInventory = await Inventory.destroy({
    where: { id },
  });
  return !!deletedInventory;
};

export const getAll = async (
  size: number,
  page: number,
  filter?: string
): Promise<getOutput> => {
  if (filter) {
    return Inventory.findAndCountAll({
      where: { location: filter },
      limit: size,
      offset: size * page,
    });
  }
  return Inventory.findAndCountAll({
    limit: size,
    offset: size * page,
  });
};
