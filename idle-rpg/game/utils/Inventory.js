const { inventory } = require('../../utils/enumHelper');
const enumHelper = require('../../utils/enumHelper');

class Inventory {

  addEquipmentIntoInventory(selectedPlayer, equipment) {
    if (selectedPlayer.inventory.equipment.length < inventory.maxEquipmentAmount && equipment.name !== enumHelper.equipment.empty.weapon.name && equipment.name !== 'Nothing') {
      selectedPlayer.inventory.equipment.push(equipment);
    } else if (selectedPlayer.inventory.equipment.length > inventory.maxEquipmentAmount && equipment.name !== enumHelper.equipment.empty.weapon.name && equipment.name !== 'Nothing') {
      let lowestCostIndex = 0;
      selectedPlayer.inventory.equipment.forEach((equip, index) => {
        if (selectedPlayer.inventory.equipment[lowestCostIndex].gold > equip.gold) {
          lowestCostIndex = index;
        }
      });
      selectedPlayer.inventory.equipment.splice(lowestCostIndex, 1);
      selectedPlayer.inventory.equipment.push(equipment);
    }

    return selectedPlayer;
  }

  addItemIntoInventory(selectedPlayer, item) {
    if (item.position === 'consumable') {
      selectedPlayer.inventory.consumables.push(item);
      return selectedPlayer;
    }

    let removeIndex = -1;
    selectedPlayer.inventory.valuables.forEach((val, index) => {
      if (item.name === val.name) {
        item.count++;
        removeIndex = index;
      }
    });
    if (removeIndex != -1) {
      selectedPlayer.inventory.valuables.splice(removeIndex, 1);
    }
    selectedPlayer.inventory.valuables.push(item);
    return selectedPlayer;
  }

  addSkillMatsIntoInventory(selectedPlayer, skillMat) {
    let removeIndex = -1;
    selectedPlayer.inventory.skillMats.forEach((mat, index) => {
      if (skillMat.name === mat.name) {
        skillMat.count += mat.count;
        removeIndex = index;
      }
    });
    if (removeIndex != -1) {
      selectedPlayer.inventory.skillMats.splice(removeIndex, 1);
    }
    selectedPlayer.inventory.skillMats.push(skillMat);
    return selectedPlayer;
  }

}
module.exports = Inventory;
