// BASE
const { aggregation } = require('../../../Base/Util');
const BaseGame = require('../../../Base/Game');
const BaseHelper = require('../../../Base/Helper');

// UTILS
const { errorLog } = require('../../../../utils/logger');

// DATA
const enumHelper = require('../../../../utils/enumHelper');

class Town extends aggregation(BaseGame, BaseHelper) {

  constructor(params) {
    super();
    const {
      Database,
      ItemManager,
      InventoryManager
    } = params;
    this.Database = Database;
    this.ItemManager = ItemManager;
    this.InventoryManager = InventoryManager;
  }

  async sell(playerObj) {
    const updatedPlayer = Object.assign({}, playerObj);
    const eventMsg = [];
    const eventLog = [];
    try {
      if (updatedPlayer.inventory.equipment.length > 0 || updatedPlayer.inventory.skillMats.length > 0) {
        let profit = 0;
        let profitTotal = 0;
        updatedPlayer.inventory.equipment.forEach((equipment) => {
          profit += Number(equipment.gold);
        });
        updatedPlayer.inventory.equipment.length = 0;
        profit = Math.floor(profit);
        updatedPlayer.gold.sold.equipment += profit;
        if (updatedPlayer.gold.sold.mostEquipment < profit) updatedPlayer.gold.sold.mostEquipment = profit;
        profitTotal += profit;
        profit = 0;

        updatedPlayer.inventory.valuables.forEach((valuable) => {
          profit += Number(valuable.gold * valuable.count);
        });
        updatedPlayer.inventory.valuables.length = 0;
        profit = Math.floor(profit);
        updatedPlayer.gold.sold.valuables += profit;
        if (updatedPlayer.gold.sold.mostValuables < profit) updatedPlayer.gold.sold.mostValuables = profit;
        profitTotal += profit;
        profit = 0;

        updatedPlayer.inventory.skillMats.forEach((skillMat) => {
          profit += Number(skillMat.gold * skillMat.count);
        });
        updatedPlayer.inventory.skillMats.length = 0;
        profit = Math.floor(profit);
        updatedPlayer.gold.sold.skillMats += profit;
        if (updatedPlayer.gold.sold.mostSkillMats < profit) updatedPlayer.gold.sold.mostSkillMats = profit;
        profitTotal += profit;
        profit = 0;

        updatedPlayer.gold.current += profitTotal;
        updatedPlayer.gold.sold.total += profitTotal;
        updatedPlayer.gold.total += profitTotal;

        eventMsg.push(`[\`${updatedPlayer.map.name}\`] ${this.generatePlayerName(updatedPlayer, true)} just sold what they found adventuring for ${profitTotal} gold!`);
        eventLog.push(`Made ${profitTotal} gold selling what you found adventuring`);

        await this.logEvent(updatedPlayer, this.Database, eventLog, enumHelper.logTypes.action);

        return {
          type: 'actions',
          updatedPlayer,
          msg: eventMsg,
          pm: eventLog
        };
      }

      return { updatedPlayer };
    } catch (err) {
      errorLog.error(err);
    }
  }

  async generateItemEvent(playerObj) {
    let updatedPlayer = Object.assign({}, playerObj);
    const eventMsg = [];
    const eventLog = [];
    try {
      const item = await this.ItemManager.generateItem(updatedPlayer);
      const itemCost = Math.round(item.gold);
      if (updatedPlayer.gold.current <= itemCost || item.name.startsWith('Cracked') || item.position === 'valuable') {
        return {
          updatedPlayer
        };
      }

      if (!enumHelper.inventory.position.includes(item.position)) {
        // updatedPlayer.equipment[item.position].position = enumHelper.equipment.types[item.position].position;
        const oldItemRating = await this.calculateItemRating(updatedPlayer, updatedPlayer.equipment[item.position]);
        const newItemRating = await this.calculateItemRating(updatedPlayer, item);
        if (oldItemRating >= newItemRating) {
          return {
            updatedPlayer
          };
        }

        updatedPlayer.gold.current -= itemCost;
        updatedPlayer = await this.setPlayerEquipment(updatedPlayer, enumHelper.equipment.types[item.position].position, item);
      } else if (updatedPlayer.inventory.consumables.length >= enumHelper.inventory.maxConsumablesAmount) {
        return {
          updatedPlayer,
        };
      } else {
        updatedPlayer.gold.current -= itemCost;
        updatedPlayer = await this.InventoryManager.addItemIntoInventory(updatedPlayer, item);
      }

      eventMsg.push(`[\`${updatedPlayer.map.name}\`] ${this.generatePlayerName(updatedPlayer, true)} just purchased \`${item.name}\` for ${itemCost} gold!`);
      eventLog.push(`Purchased ${item.name} from Town for ${itemCost} Gold`);
      await this.logEvent(updatedPlayer, this.Database, eventLog, enumHelper.logTypes.action);

      return {
        type: 'actions',
        updatedPlayer,
        msg: eventMsg,
        pm: eventLog
      };
    } catch (err) {
      errorLog.error(err);
    }
  }
}
module.exports = Town;
