import Inventory, {
  InventoryInput,
  InventoryOutput,
} from "../models/inventory.model";

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

export const getAll = async (filter?: string): Promise<InventoryOutput[]> => {
  if (filter) {
    return Inventory.findAll({ where: { location: filter } });
  }
  return Inventory.findAll();
};
