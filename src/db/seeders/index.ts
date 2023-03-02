import * as inventoryDal from "../dal/inventory.dal";
const chance = require("chance").Chance();

export const createSeeds = async (): Promise<void> => {
  const dataCount = 200000;

  chance.mixin({
    inventory: function () {
      return {
        name: chance.word(),
        price: chance.floating({ min: 1, max: 100, fixed: 2 }),
        location: chance.pickone([
          "მთავარი ოფისი",
          "კავეა გალერია",
          "კავეა თბილისი მოლი",
          "კავეა ისთ ფოინთი",
          "კავეა სითი მოლი",
        ]),
      };
    },
  });

  for (let index = 0; index < dataCount; index++) {
    await inventoryDal.create(chance.inventory());
  }
};
