// BASE
const { aggregation } = require('../../../Base/Util');
const BaseGame = require('../../../Base/Game');
const BaseHelper = require('../../../Base/Helper');

// UTILS
const { errorLog } = require('../../../../utils/logger');

// DATA
const enumHelper = require('../../../../utils/enumHelper');
const { maximumTimer } = require('../../../../../settings');

class Skill extends aggregation(BaseGame, BaseHelper) {

  constructor(params) {
    super();
    const { Database, SpellManager, ItemManager, InventoryManager } = params;
    this.Database = Database;
    this.SpellManager = SpellManager;
    this.ItemManager = ItemManager;
    this.InventoryManager = InventoryManager;
  }

  async woodcuttingEvent(playerObj, multiplier) {
    let updatedPlayer = Object.assign({}, playerObj);
    const eventMsg = [];
    const eventLog = [];
    try {
      const woodcuttingMat = await this.ItemManager.generateSkillMat(updatedPlayer, 0);
      const woodcuttingXP = woodcuttingMat.experience * woodcuttingMat.count * multiplier;

      if (woodcuttingMat.count !== 0) {
        updatedPlayer.skills.woodcutting.experience.current += woodcuttingXP;
        updatedPlayer.skills.woodcutting.experience.total += woodcuttingXP;
        updatedPlayer.skills.total.experience += woodcuttingXP;

        eventMsg.push(`${this.generatePlayerName(updatedPlayer, true)} just chopped down \`${woodcuttingMat.source}\` and gained \`${woodcuttingMat.count}\` \`${woodcuttingMat.name}\` and \`${woodcuttingXP}\` Woodcutting experience!`);
        eventLog.push(`You chopped down ${woodcuttingMat.source} and gained ${woodcuttingMat.count} ${woodcuttingMat.name} and ${woodcuttingXP} Woodcutting experience`);

        if (updatedPlayer.skills.woodcutting.experience.current >= updatedPlayer.skills.woodcutting.level * 15) {
          updatedPlayer.skills.woodcutting.level++;
          updatedPlayer.skills.total.level++;
          updatedPlayer.skills.woodcutting.experience.current = 0;
          eventMsg.push(`\`\`\`css\n${updatedPlayer.name}${updatedPlayer.titles.current !== 'None' ? ` the ${updatedPlayer.titles.current}` : ''} now has level ${updatedPlayer.skills.woodcutting.level} Woodcutting!\`\`\``);
          eventLog.push(`Leveled their Woodcutting to level ${updatedPlayer.skills.woodcutting.level}`);
        }
          updatedPlayer = await this.InventoryManager.addSkillMatsIntoInventory(updatedPlayer, woodcuttingMat);
        
      } else {
        eventMsg.push(`${this.generatePlayerName(updatedPlayer, true)} just tried to chop down \`${woodcuttingMat.source}\` and failed to obtain any \`${woodcuttingMat.name}\`!`)
        eventLog.push(`You tried to chop down ${woodcuttingMat.source} and failed to obtain any ${woodcuttingMat.name}`);
      }

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

  async miningEvent(playerObj, multiplier) {
    let updatedPlayer = Object.assign({}, playerObj);
    const eventMsg = [];
    const eventLog = [];
    try {
      const miningMat = await this.ItemManager.generateSkillMat(updatedPlayer, 1);
      const miningXP = miningMat.experience * miningMat.count * multiplier;

      if (miningMat.count !== 0) {
        updatedPlayer.skills.mining.experience.current += miningXP;
        updatedPlayer.skills.mining.experience.total += miningXP;
        updatedPlayer.skills.total.experience += miningXP;

        eventMsg.push(`${this.generatePlayerName(updatedPlayer, true)} just mined \`${miningMat.source}\` and gained \`${miningMat.count}\` \`${miningMat.name}\` and \`${miningXP}\` Mining experience!`);
        eventLog.push(`You mined ${miningMat.source} and gained ${miningMat.count} ${miningMat.name} and ${miningXP} Mining experience`);

        if (updatedPlayer.skills.mining.experience.current >= updatedPlayer.skills.mining.level * 15) {
          updatedPlayer.skills.mining.level++;
          updatedPlayer.skills.total.level++;
          updatedPlayer.skills.mining.experience.current = 0;
          eventMsg.push(`\`\`\`css\n${updatedPlayer.name}${updatedPlayer.titles.current !== 'None' ? ` the ${updatedPlayer.titles.current}` : ''} now has level ${updatedPlayer.skills.mining.level} Mining!\`\`\``);
          eventLog.push(`Leveled their Mining to level ${updatedPlayer.skills.mining.level}`);
        }
          updatedPlayer = await this.InventoryManager.addSkillMatsIntoInventory(updatedPlayer, miningMat);
        
      } else {
        eventMsg.push(`${this.generatePlayerName(updatedPlayer, true)} just tried to mine \`${miningMat.source}\` and failed to obtain any \`${miningMat.name}\`!`)
        eventLog.push(`You mined ${miningMat.source} and failed to obtain any ${miningMat.name}`);
      }

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

  async fishingEvent(playerObj, multiplier) {
    let updatedPlayer = Object.assign({}, playerObj);
    const eventMsg = [];
    const eventLog = [];
    try {
      const fishingMat = await this.ItemManager.generateSkillMat(updatedPlayer, 2);
      const fishingXP = fishingMat.experience * fishingMat.count * multiplier;

      if (fishingMat.count !== 0) {
        updatedPlayer.skills.fishing.experience.current += fishingXP;
        updatedPlayer.skills.fishing.experience.total += fishingXP;
        updatedPlayer.skills.total.experience += fishingXP;

        eventMsg.push(`${this.generatePlayerName(updatedPlayer, true)} just fished with \`${fishingMat.source}\` and gained \`${fishingMat.count}\` \`${fishingMat.name}\` and \`${fishingXP}\` Fishing experience!`);
        eventLog.push(`You fished with ${fishingMat.source} and gained ${fishingMat.count} ${fishingMat.name} and ${fishingXP} Fishing experience`);

        if (updatedPlayer.skills.fishing.experience.current >= updatedPlayer.skills.fishing.level * 15) {
          updatedPlayer.skills.fishing.level++;
          updatedPlayer.skills.total.level++;
          updatedPlayer.skills.fishing.experience.current = 0;
          eventMsg.push(`\`\`\`css\n${updatedPlayer.name}${updatedPlayer.titles.current !== 'None' ? ` the ${updatedPlayer.titles.current}` : ''} now has level ${updatedPlayer.skills.fishing.level} Fishing!\`\`\``);
          eventLog.push(`Leveled their Fishing to level ${updatedPlayer.skills.fishing.level}`);
        }
          updatedPlayer = await this.InventoryManager.addSkillMatsIntoInventory(updatedPlayer, fishingMat);
        
      } else {
        eventMsg.push(`${this.generatePlayerName(updatedPlayer, true)} just tried fishing with \`${fishingMat.source}\` and failed to obtain any \`${fishingMat.name}\`!`)
        eventLog.push(`You fished with ${fishingMat.source} and failed to obtain any ${fishingMat.name}`);
      }

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

  async herbalismEvent(playerObj, multiplier) {
    let updatedPlayer = Object.assign({}, playerObj);
    const eventMsg = [];
    const eventLog = [];
    try {
      const herbalismMat = await this.ItemManager.generateSkillMat(updatedPlayer, 3);
      const herbalismXP = herbalismMat.experience * herbalismMat.count * multiplier;

      if (herbalismMat.count !== 0) {
        updatedPlayer.skills.herbalism.experience.current += herbalismXP;
        updatedPlayer.skills.herbalism.experience.total += herbalismXP;
        updatedPlayer.skills.total.experience += herbalismXP;

        eventMsg.push(`${this.generatePlayerName(updatedPlayer, true)} just gathered \`${herbalismMat.count}\` \`${herbalismMat.name}\` and gained \`${herbalismXP}\` Herbalism experience!`);
        eventLog.push(`You gathered ${herbalismMat.count} ${herbalismMat.name} and gained ${herbalismXP} Herbalism experience`);

        if (updatedPlayer.skills.herbalism.experience.current >= updatedPlayer.skills.herbalism.level * 15) {
          updatedPlayer.skills.herbalism.level++;
          updatedPlayer.skills.total.level++;
          updatedPlayer.skills.herbalism.experience.current = 0;
          eventMsg.push(`\`\`\`css\n${updatedPlayer.name}${updatedPlayer.titles.current !== 'None' ? ` the ${updatedPlayer.titles.current}` : ''} now has level ${updatedPlayer.skills.herbalism.level} Herbalism!\`\`\``);
          eventLog.push(`Leveled their Herbalism to level ${updatedPlayer.skills.herbalism.level}`);
        }
          updatedPlayer = await this.InventoryManager.addSkillMatsIntoInventory(updatedPlayer, herbalismMat);
        
      } else {
        eventMsg.push(`${this.generatePlayerName(updatedPlayer, true)} just tried gathering \`${herbalismMat.name}\` and failed!`)
        eventLog.push(`You tried gathering ${herbalismMat.name} and failed`);
      }

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
module.exports = Skill;