const seedrandom = require('seedrandom');
const enumHelper = require('../../utils/enumHelper');
const { battleDebug } = require('../../../settings');
const messages = require('../../game/data/messages');

const RNG = seedrandom();

class Helper {

  /*
    GAME HELPERS
  */

  /**
   * Returns a random number between a min and max
   * Utilizing https://stackoverflow.com/questions/15594332/unbiased-random-range-generator-in-javascript
   * @param {Number} min
   * @param {Number} max
   * @param {Number} decimal
   * @param {Number} exclude
   * @returns {Number}
   */
  randomBetween(min, max, decimal, exclude) {
    // Adding + 1 to max due to trunc
    max += 1;
    if (arguments.length < 2) return (RNG() >= 0.5);

    let factor = 1;
    let result;
    if (typeof decimal === 'number') {
      factor = decimal ** 10;
    }
    do {
      result = (RNG() * (max - min)) + min;
      result = Math.trunc(result * factor) / factor;
    } while (result === exclude);
    return result;
  }

  randomChoice(array) {
    return array[this.randomBetween(0, array.length - 1)];
  }

  // TODO rework % have to track better pvp and pve stats
  /**
   * Generates stats String from player object
   * @param {Object} player
   * @returns String
   */
  generateStatsString(player) {
    return `\`\`\`Here are your stats!
    Title: ${player.titles.current}
    Health: ${player.health} / ${enumHelper.maxHealth(player.level)}
    Mana: ${player.mana} / ${enumHelper.maxMana(player.level)}
    Level: ${player.level}
      XP: ${player.experience.current} / ${(player.level * 15)}
      XP Lost: ${player.experience.lost} (${((player.experience.lost / player.experience.total) * 100).toFixed(2)}%)
      XP Total: ${player.experience.total}
    Personal Multiplier: ${player.personalMultiplier}x
    Class: ${player.class}
    Gender: ${player.gender}
    Gold:
      Current: ${player.gold.current}
      Lost: ${player.gold.lost} (${((player.gold.lost / player.gold.total) * 100).toFixed(2)}%)
      Stolen from you: ${player.gold.stolen} (${((player.gold.stolen / player.gold.total) * 100).toFixed(2)}%)
      Stole from others: ${player.gold.stole} (${((player.gold.stole / player.gold.total) * 100).toFixed(2)}%)
      Lottery: ${player.gold.dailyLottery} (${((player.gold.dailyLottery / player.gold.total) * 100).toFixed(2)}%)
        Count: ${player.lottery.count}
        Won: ${player.lottery.won} (${((player.lottery.won / player.lottery.count) * 100).toFixed(2)}%)
        Lost: ${player.lottery.count - player.lottery.won} (${(((player.lottery.count - player.lottery.won) / player.lottery.count) * 100).toFixed(2)}%)
      Gambles: 
        Count: ${player.gambles}
        Won: ${player.gold.gambles.won} (${((player.gold.gambles.won / player.gold.total) * 100).toFixed(2)}%)
        Lost: ${player.gold.gambles.lost} (${((player.gold.gambles.lost / player.gold.total) * 100).toFixed(2)}%)
      Sold:
        Equipment: ${player.gold.sold.equipment} (${((player.gold.sold.equipment / player.gold.sold.total) * 100).toFixed(2)}%)
        Highest Equipment Sale: ${player.gold.sold.mostEquipment}
        Valuables: ${player.gold.sold.valuables} (${((player.gold.sold.valuables / player.gold.sold.total) * 100).toFixed(2)}%)
        Highest Valuables Sale: ${player.gold.sold.mostValuables}
        Crafting Materials: ${player.gold.sold.skillMats} (${((player.gold.sold.skillMats / player.gold.sold.total) * 100).toFixed(2)}%)
        Highest Crafting Materials Sale: ${player.gold.sold.mostSkillMats}
        Total: ${player.gold.sold.total} (${((player.gold.sold.total / player.gold.total) * 100).toFixed(2)}%)
      Total: ${player.gold.total}
    Map: ${player.map.name}
    Bounty: ${player.currentBounty}

    Stats (Sum of stats with equipment):
      Strength: ${player.stats.str} (${this.sumPlayerTotalStrength(player)})
      Dexterity: ${player.stats.dex} (${this.sumPlayerTotalDexterity(player)})
      Endurance: ${player.stats.end} (${this.sumPlayerTotalEndurance(player)})
      Intelligence: ${player.stats.int} (${this.sumPlayerTotalIntelligence(player)})
      Luck: ${player.stats.luk} (${this.sumPlayerTotalLuck(player)})

    Skills:
      Mining:
        Level: ${player.skills.mining.level}
        XP: ${player.skills.mining.experience.current} / ${player.skills.mining.level * 15}
      Fishing:
        Level: ${player.skills.fishing.level}
        XP: ${player.skills.fishing.experience.current} / ${player.skills.fishing.level * 15}
      Woodcutting:
        Level: ${player.skills.woodcutting.level}
        XP: ${player.skills.woodcutting.experience.current} / ${player.skills.woodcutting.level * 15}
      Herbalism:
        Level: ${player.skills.herbalism.level}
        XP: ${player.skills.herbalism.experience.current} / ${player.skills.herbalism.level * 15}
      Total: 
        Level: ${player.skills.total.level}
        XP: ${player.skills.total.experience}

    Quest:
      Monster: ${player.quest.questMob.name}
      Count: ${player.quest.questMob.count}
      Kills Left: ${player.quest.questMob.count - player.quest.questMob.killCount}
      Completed: ${player.quest.completed}
      Last Update: ${this.getTimePassed(player.quest.updated_at.getTime())}

    Born: ${this.getTimePassed(player.createdAt)}
    Travelled: ${player.travelled} (${((player.travelled / player.events) * 100).toFixed(2)}%)
    Events: ${player.events}
    Items Stolen: ${player.stole}
    Items Lost: ${player.stolen}
    Spells Cast: ${player.spellCast}
    Kills:
      Monsters: ${player.kills.mob}
      Players: ${player.kills.player}
    Fled:
      Monsters: ${player.fled.mob}
      Players: ${player.fled.player}
      You: ${player.fled.you}
    Battles:
      Won: ${player.battles.won}
      Lost: ${player.battles.lost}
    Deaths:
      By Monsters: ${player.deaths.mob}
      By Players: ${player.deaths.player}\`\`\``;
  }

  /**
   * Generates equipment string
   * @param {Object} player
   * @returns String
   */
  generateEquipmentsString(player) {
    const weaponRating = this.calculateItemRating(player, player.equipment.weapon);
    return `\`\`\`Here is your equipment!
    Helmet: ${player.equipment.helmet.name}
      Defense: ${player.equipment.helmet.power}
      ${this.generatePreviousOwnerString(player.equipment.helmet)}
    Body Armour: ${player.equipment.bodyArmour.name}
      Defense: ${player.equipment.bodyArmour.power}
      ${this.generatePreviousOwnerString(player.equipment.bodyArmour)}
    Gloves: ${player.equipment.gloves.name}
      Defense: ${player.equipment.gloves.power}
      ${this.generatePreviousOwnerString(player.equipment.gloves)}
    Belt: ${player.equipment.belt.name}
      Defense: ${player.equipment.belt.power}
      ${this.generatePreviousOwnerString(player.equipment.belt)}
    Weapon: ${player.equipment.weapon.name}
      Base Attack Power: ${player.equipment.weapon.power}
      Attack Power: ${Number(weaponRating)}
      Attack Type: ${player.equipment.weapon.attackType}
      ${this.generatePreviousOwnerString(player.equipment.weapon)}
    Amulet: ${player.equipment.amulet.name}
      Power: ${player.equipment.amulet.power}
      ${this.generatePreviousOwnerString(player.equipment.amulet)}
    Right Ring: ${player.equipment.ringRight.name}
      Power: ${player.equipment.ringRight.power}
      ${this.generatePreviousOwnerString(player.equipment.ringRight)}
    Left Ring: ${player.equipment.ringLeft.name}
      Power: ${player.equipment.ringLeft.power}
      ${this.generatePreviousOwnerString(player.equipment.ringLeft)}
    Relic: ${player.equipment.relic.name}
      Stats:
        Strength: ${player.equipment.relic.str}
        Dexterity: ${player.equipment.relic.dex}
        Endurance: ${player.equipment.relic.end}
        Intelligence: ${player.equipment.relic.int}
        Luck: ${player.equipment.relic.luk}
      ${this.generatePreviousOwnerString(player.equipment.relic)}
    \`\`\``;
  }

  generateInventoryString(player) {
    return this.generateInventoryEquipmentString(player)
      .then((equipment) => {
        return `\`\`\`Here is your inventory!
    Equipment:
      ${equipment}
    Consumables:
      ${player.inventory.consumables.map(consumable => consumable.name).join('\n      ')}

    Valuables:
      ${player.inventory.valuables.map(valuable => { return (`${valuable.count} ${valuable.name} - ${valuable.count * valuable.gold} gold`) }).join('\n      ')}
      
    Crafting Materials:
      ${player.inventory.skillMats.map(skillMat => { return (`${skillMat.count} ${skillMat.name} - ${skillMat.count * skillMat.gold} gold`) }).join('\n      ')}
        \`\`\``;
      });
  }

  generateInventoryEquipmentString(player) {
    return new Promise((resolve) => {
      let equipString = '';
      player.inventory.equipment.forEach((equip, index, array) => {
        switch (equip.position) {
          case enumHelper.equipment.types.helmet.position:
            equipString = equipString.concat(`${equip.name}:
        Defense: ${equip.power}
          ${this.generatePreviousOwnerString(equip)}`);
            break;

          case enumHelper.equipment.types.bodyArmour.position:
            equipString = equipString.concat(`${equip.name}:
        Defense: ${equip.power}
          ${this.generatePreviousOwnerString(equip)}`);
            break;

          case enumHelper.equipment.types.gloves.position:
            equipString = equipString.concat(`${equip.name}:
        Defense: ${equip.power}
          ${this.generatePreviousOwnerString(equip)}`);
            break;

          case enumHelper.equipment.types.weapon.position:
            const weaponRating = this.calculateItemRating(player, equip);
            equipString = equipString.concat(`${equip.name}:
        Base Attack Power: ${equip.power}
        Attack Power: ${Number(weaponRating)}
        Attack Type: ${equip.attackType}
          ${this.generatePreviousOwnerString(equip)}`);
            break;

          case enumHelper.equipment.types.amulet.position:
            equipString = equipString.concat(`${equip.name}:
        Power: ${equip.power}
          ${this.generatePreviousOwnerString(equip)}`);
            break;

          case enumHelper.equipment.types.belt.position:
            equipString = equipString.concat(`${equip.name}:
        Defense: ${equip.power}
          ${this.generatePreviousOwnerString(equip)}`);
            break;

          case enumHelper.equipment.types.ringRight.position:
            equipString = equipString.concat(`${equip.name}:
        Power: ${equip.power}
          ${this.generatePreviousOwnerString(equip)}`);
            break;

          case enumHelper.equipment.types.ringLeft.position:
            equipString = equipString.concat(`${equip.name}:
        Power: ${equip.power}
          ${this.generatePreviousOwnerString(equip)}`);
            break;
        }

        if (index !== array.length - 1) {
          equipString = equipString.concat('\n      ');
        }
      });

      return resolve(equipString);
    });
  }

  generateSpellBookString(player) {
    let spellBookString = '\`\`\`Here\'s your spellbook!\n';
    player.spells.forEach((spell) => {
      spellBookString += `    ${spell.name} - ${spell.description}\n`;
    });
    spellBookString += '\`\`\`';

    return spellBookString;
  }

  /**
   * Generates List of owners of equipment
   * @param {Object} equipment
   * @returns String
   */
  generatePreviousOwnerString(equipment) {
    if (equipment.previousOwners && equipment.previousOwners.length > 0) {
      let result = 'Previous Owners:\n            ';
      result += equipment.previousOwners.join('\n            ');
      result += '\n';
      return result;
    }

    return '';
  }

  /**
   * Returns a player name as a String formatted with discords <@!Mention> if player has isMention activated
   * @param {PlayerObj} player
   * @param {Boolean} isAction
   * @returns {String}
   */
  generatePlayerName(player, isAction) {
    if (
      player.isMentionInDiscord === 'off'
      || player.isMentionInDiscord === 'action' && !isAction
      || player.isMentionInDiscord === 'move' && isAction
    ) {
      return player.titles.current !== 'None'
        ? `\`${player.name} the ${player.titles.current}\``
        : `\`${player.name}\``;
    }

    return player.titles.current !== 'None'
      ? `<@!${player.discordId}> the ${player.titles.current}`
      : `<@!${player.discordId}>`;
  }

  /**
   * Based on player setting, transform into the correct gender
   * @param {PlayerObj} player
   * @param {String} word
   * @returns {String}
   */
  generateGenderString(player, word) {
    return enumHelper.genders[player.gender] ? enumHelper.genders[player.gender][word] : word;
  }

  /*
    BATTLE HELPERS
  */
  // TODO: CLEAN THIS UP MAN
  pveMessageFormat(results, updatedPlayer, playerMaxHealth, multiplier) {
    const mobListResult = [];
    const mobListInfo = { mobs: [] };
    let isQuestCompleted = false;
    const eventMsg = [`[\`${results.attacker.map.name}\`] `];
    const eventLog = [];
    let mobCountString = '';
    let mobKillCountString = '';
    let mobFleeCountString = '';
    let expGain = 0;
    let goldGain = 0;
    let questExpGain = 0;
    let questGoldGain = 0;

    results.defender.forEach((mob) => {
      let infoList = mobListInfo.mobs.findIndex(arrayMob => arrayMob.mob === mob.name);
      if (infoList !== -1) {
        mobListInfo.mobs[infoList].totalCount++;
      } else {
        mobListInfo.mobs.push({
          mob: mob.name,
          totalCount: 0,
          event: {
            killed: 0,
            fled: 0,
            survived: 0
          }
        });
      }
      infoList = mobListInfo.mobs.findIndex(arrayMob => arrayMob.mob === mob.name);
      expGain += Math.ceil(((mob.experience) + (mob.dmgDealt / 4)) / 6) * multiplier;

      if (mob.health <= 0) {
        goldGain += Math.floor((mob.gold * multiplier));
        mobListInfo.mobs[infoList].event.killed++;
      } else if (mob.health > 0 && updatedPlayer.health > 0) {
        mobListInfo.mobs[infoList].event.fled++;
        mob.health > updatedPlayer.health ? updatedPlayer.fled.you++ : updatedPlayer.fled.mob++;
      } else if (mob.health > 0 && updatedPlayer.health <= 0) {
        mobListInfo.mobs[infoList].event.survived++;
      }

      if (!updatedPlayer.quest.questMob.name.includes('None') && mob.name.includes(updatedPlayer.quest.questMob.name) && mob.health <= 0) {
        updatedPlayer.quest.questMob.killCount++;
        if (updatedPlayer.quest.questMob.killCount >= updatedPlayer.quest.questMob.count) {
          isQuestCompleted = true;
          questExpGain = Math.ceil((expGain * updatedPlayer.quest.questMob.count) / 2);
          questGoldGain = Math.ceil((goldGain * updatedPlayer.quest.questMob.count) / 2);
          updatedPlayer.quest.questMob.name = 'None';
          updatedPlayer.quest.questMob.count = 0;
          updatedPlayer.quest.questMob.killCount = 0;
          updatedPlayer.quest.completed++;
        }
        updatedPlayer.quest.updated_at = new Date();
      }

      if (Math.floor(results.defenderDamage / (results.defender.length)) > 0) {
        mobListResult.push(`  ${mob.name}'s ${mob.equipment.weapon.name} did ${mob.dmgDealt} damage.`);
      }
      mobListResult.push(`  ${mob.health <= 0 ? `${mob.name} took ${mob.dmgReceived} dmg and died.` : `${mob.name} took ${mob.dmgReceived} dmg and has ${mob.health} / ${mob.maxHealth} HP left.`}`);
    });
    let battleResult = `\`\`\`Battle Results:
  You have ${updatedPlayer.health} / ${playerMaxHealth} HP left.
${mobListResult.join('\n')}\`\`\``;

    if (updatedPlayer.health <= 0) {
      battleResult = battleResult.replace(`  You have ${updatedPlayer.health} / ${playerMaxHealth} HP left.`, '');
      const killerMob = results.defender.map((mob) => {
        if (mob.dmgDealt > 0) {
          return mob.name;
        }

        return '';
      }).join(', ').replace(/,$/g, '');
      eventMsg.push(`| ${killerMob} just killed ${this.generatePlayerName(updatedPlayer, true)}!`);
      eventLog.push(`${killerMob} just killed you!`);
    }
    const eventMsgResults = `↳ ${this.capitalizeFirstLetter(this.generateGenderString(updatedPlayer, 'he'))} dealt \`${results.attackerDamage}\` dmg, received \`${results.defenderDamage}\` dmg and gained \`${expGain}\` exp${goldGain === 0 ? '' : ` and \`${goldGain}\` gold`}! [HP:${updatedPlayer.health}/${playerMaxHealth}]`;

    mobListInfo.mobs.forEach((mobInfo, i) => {
      const totalCount = mobInfo.event.killed + mobInfo.event.fled + mobInfo.event.survived;
      mobCountString = i > 0 ? mobCountString.concat(`, ${totalCount}x \`${mobInfo.mob}\``) : mobCountString.concat(`${totalCount}x \`${mobInfo.mob}\``);
      if (mobInfo.event.killed > 0) {
        mobKillCountString = mobKillCountString !== '' ? mobKillCountString.concat(`, ${mobInfo.event.killed}x \`${mobInfo.mob}\``) : mobKillCountString.concat(`${mobInfo.event.killed}x \`${mobInfo.mob}\``);
      }
      if (mobInfo.event.fled > 0 && mobInfo.event.killed === 0) {
        mobFleeCountString = mobKillCountString !== '' ? mobFleeCountString.concat(`, ${mobInfo.event.fled}x \`${mobInfo.mob}\``) : mobFleeCountString.concat(`${mobInfo.event.fled}x \`${mobInfo.mob}\``);
      } else if (mobInfo.event.fled > 0) {
        mobFleeCountString = mobFleeCountString.concat(`${mobInfo.event.fled}x \`${mobInfo.mob}\``);
      }
    });

    if (mobFleeCountString) {
      eventMsg.push(results.attackerDamage > results.defenderDamage
        ? `${mobFleeCountString} just fled from ${this.generatePlayerName(results.attacker, true)}!`.replace(/1x /g, '')
        : `${this.generatePlayerName(results.attacker, true)} just fled from ${mobFleeCountString}!`.replace(/1x /g, ''));
      eventLog.push(results.attackerDamage > results.defenderDamage
        ? `${mobFleeCountString} fled from you! [${expGain} exp]`.replace(/1x /g, '')
        : `You fled from ${mobFleeCountString}! [${expGain} exp]`.replace(/1x /g, ''));
    }

    if (mobKillCountString) {
      eventMsg.push(`${this.generatePlayerName(updatedPlayer, true)}'s \`${updatedPlayer.equipment.weapon.name}\` just killed ${mobKillCountString}`.replace(/1x /g, ''));
      eventLog.push(`You killed ${mobKillCountString}! [\`${expGain}\` exp${goldGain === 0 ? '' : ` / \`${goldGain}\` gold`}]`.replace(/1x /g, '').replace(/\n$/g, ''));
    }
    const attackedMsg = `Attacked ${mobCountString.replace(/`/g, '')} with \`${updatedPlayer.equipment.weapon.name}\` in \`${updatedPlayer.map.name}\` `.replace(/1x /g, '');
    eventMsg.push(eventMsgResults);
    eventLog.push(attackedMsg.replace(/1x /g, '').concat(battleResult));
    eventMsg.splice(0, 2, eventMsg[0] + eventMsg[1]);

    return {
      updatedPlayer,
      expGain,
      goldGain,
      questExpGain,
      questGoldGain,
      eventMsg,
      eventLog,
      isQuestCompleted
    };
  }

  /**
   * Calculates item rating taking players stats into account
   * @param {Object} player
   * @param {Object} item
   * @returns Number
   */
  calculateItemRating(player, item) {
    if (player && item.position !== enumHelper.equipment.types.relic.position) {
      if (item.position !== enumHelper.equipment.types.weapon.position) {
        return item.power;
      }

      switch (item.attackType) {
        case 'melee':
          return Math.ceil((this.sumPlayerTotalStrength(player) + item.power)
            + (this.sumPlayerTotalDexterity(player)));

        case 'range':
          return Math.ceil((this.sumPlayerTotalDexterity(player) + item.power)
            + (this.sumPlayerTotalDexterity(player)));

        case 'magic':
          return Math.ceil((this.sumPlayerTotalIntelligence(player) + item.power)
            + (this.sumPlayerTotalDexterity(player)));
      }
    }

    return Math.ceil(item.str + item.dex + item.end + item.int + item.luk);
  }

  /**
   * Returns sum of players strength
   * @param {Object} player
   * @returns Number
   */
  sumPlayerTotalStrength(player) {
    return player.stats.str
      + player.equipment.relic.str;
  }

  /**
  * Returns sum of players dexterity
  * @param {Object} player
  * @returns Number
  */
  sumPlayerTotalDexterity(player) {
    return player.stats.dex
      + player.equipment.relic.dex;
  }

  /**
  * Returns sum of players endurance
  * @param {Object} player
  * @returns Number
  */
  sumPlayerTotalEndurance(player) {
    return player.stats.end
      + player.equipment.relic.end;
  }

  /**
  * Returns sum of players intelligence
  * @param {Object} player
  * @returns Number
  */
  sumPlayerTotalIntelligence(player) {
    return player.stats.int
      + player.equipment.relic.int;
  }

  /**
  * Returns sum of players luck
  * @param {Object} player
  * @returns Number
  */
  sumPlayerTotalLuck(player) {
    return player.stats.luk
      + player.equipment.relic.luk;
  }

  /*
    GENERAL HELPERS
  */

  /**
   * Converts seconds to time format
   * Utilizes https://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss#6313008
   * @param {Date} duration
   * @returns String
   */
  secondsToTimeFormat(duration) {
    const secNum = parseInt(duration, 10); // don't forget the second param
    let days = Math.floor(secNum / 86400);
    let hours = Math.floor(secNum / 3600) % 24;
    let minutes = Math.floor((secNum - (hours * 3600)) / 60) % 60;
    let seconds = secNum % 60;

    days = days < 10 ? `0${days}` : days;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  /**
   * Returns formatted string of time passed since timeStamp
   * @param {Date} timeStamp
   * @returns String
   */
  getTimePassed(timeStamp) {
    return this.secondsToTimeFormat((new Date().getTime() - timeStamp) / 1000);
  }

  /**
   * Returns a codeblock for discord
   * @param {String} message
   * @returns {String} codeblock
   */
  setImportantMessage(message) {
    return `\`\`\`css\n${message}\`\`\``;
  }

  /**
   * Capitalizes first letter of string
   * @param {String} stringToCapitalize
   * @returns {String}
   */
  capitalizeFirstLetter(stringToCapitalize) {
    return stringToCapitalize[0].toUpperCase() + stringToCapitalize.slice(1);
  }

  /**
   * Verifies if object contains name of nameToCheck
   * @param {Object} obj
   * @param {String} nameToCheck
   * @returns {Boolean}
   */
  objectContainsName(obj, nameToCheck) {
    if (typeof obj !== 'object') {
      throw new Error('obj provided is not an Object!');
    }
    if (typeof nameToCheck !== 'string') {
      throw new Error('nameToCheck provided is not a String!');
    }

    const keyList = Object.keys(obj);
    for (let i = 0; i < keyList.length; i++) {
      if (!keyList.includes('name') && typeof obj[keyList[i]] === 'object') {
        if (this.objectContainsName(obj[keyList[i]], nameToCheck)) {
          return true;
        }
      } else if (obj[keyList[i]] && obj[keyList[i]] === nameToCheck) {
        return true;
      }
    }

    return false;
  }

  printBattleDebug(debugMsg) {
    if (battleDebug) {
      console.log(debugMsg);
    }
  }

  logEvent(selectedPlayer, Database, msg, eventType) {
    return new Promise((resolve) => {
      switch (eventType) {
        case enumHelper.logTypes.move:
          Database.loadMoveLog(selectedPlayer.discordId)
            .then((playerMoveLog) => {
              if (playerMoveLog.log.length > 25) {
                playerMoveLog.log.shift();
              }

              playerMoveLog.log.push({
                event: msg.includes('`') ? msg.replace(/`/g, '') : msg,
                timeStamp: new Date().getTime()
              });

              return playerMoveLog;
            })
            .then(playerMoveLog => Database.saveMoveLog(selectedPlayer.discordId, playerMoveLog))
            .catch((err) => {
              errorLog.error(err);
            });
          break;

        case enumHelper.logTypes.action:
          Database.loadActionLog(selectedPlayer.discordId)
            .then((playerActionLog) => {
              if (playerActionLog.log.length > 25) {
                playerActionLog.log.shift();
              }

              playerActionLog.log.push({
                event: msg.includes('`') ? msg.replace(/`/g, '') : msg,
                timeStamp: new Date().getTime()
              });

              return playerActionLog;
            })
            .then(playerActionLog => Database.saveActionLog(selectedPlayer.discordId, playerActionLog));
          break;

        case enumHelper.logTypes.pvp:
          Database.loadPvpLog(selectedPlayer.discordId)
            .then((playerPvpLog) => {
              if (playerPvpLog.log.length > 25) {
                playerPvpLog.log.shift();
              }

              playerPvpLog.log.push({
                event: msg.includes('`') ? msg.replace(/`/g, '') : msg,
                timeStamp: new Date().getTime()
              });

              return playerPvpLog;
            })
            .then(playerPvpLog => Database.savePvpLog(selectedPlayer.discordId, playerPvpLog));
          break;
      }

      return resolve(selectedPlayer);
    });
  }

  generateLog(log, count) {
    if (log.length === 0) {
      return '';
    }

    let logResult = 'Heres what you have done so far:\n      ';
    let logCount = 0;
    for (let i = log.length - 1; i >= 0; i--) {
      if (logCount === count) {
        break;
      }
      let eventText;
      if (typeof log[i].event === 'string') {
        eventText = log[i].event;
      } else {
        eventText = log[i].event[0];
      }
      logResult += `${eventText} [${this.getTimePassed(log[i].timeStamp)} ago]\n      `.replace(/`/g, '');
      logCount++;
    }

    return logResult;
  }

  generateMessageWithNames(eventMsg, eventLog, selectedPlayer, item, luckGambleGold, victimPlayer, otherPlayerLog) {
    // TODO: Maybe change these ^^^^^ into an array???
    eventMsg = eventMsg.replace(/(\$\$)/g, selectedPlayer.map.name)
      .replace(/(##)/g, this.generatePlayerName(selectedPlayer, true))
      .replace(/(@@)/g, this.generateGenderString(selectedPlayer, 'him'))
      .replace(/(\^\^)/g, this.generateGenderString(selectedPlayer, 'his'))
      .replace(/(&&)/g, this.generateGenderString(selectedPlayer, 'he'));

    eventLog = eventLog.replace('$$', selectedPlayer.map.name)
      .replace(/(##)/g, selectedPlayer.name)
      .replace(/(@@)/g, this.generateGenderString(selectedPlayer, 'him'))
      .replace(/(\^\^)/g, this.generateGenderString(selectedPlayer, 'his'))
      .replace(/(&&)/g, this.generateGenderString(selectedPlayer, 'he'));

    if (item) {
      eventMsg = eventMsg.replace(/(%%)/g, item.name);
      eventLog = eventLog.replace(/(%%)/g, item.name);
    }
    if (luckGambleGold) {
      eventMsg = eventMsg.replace(/(\$&)/g, luckGambleGold);
      eventLog = eventLog.replace(/(\$&)/g, luckGambleGold);
    }
    if (victimPlayer) {
      eventMsg = eventMsg.replace(/(!!)/g, this.generatePlayerName(victimPlayer, true));
      eventLog = eventLog.replace(/(!!)/g, victimPlayer.name);
    }
    if (otherPlayerLog) {
      eventMsg = eventMsg.replace(/(~~)/g, otherPlayerLog);
      eventLog = eventLog.replace(/(~~)/g, otherPlayerLog);
    }

    return { eventMsg, eventLog, selectedPlayer, item, victimPlayer, otherPlayerLog };
  }

  async randomCampEventMessage(selectedPlayer) {
    const randomEventInt = await this.randomBetween(0, messages.event.camp.length - 1);
    const { eventMsg, eventLog } = messages.event.camp[randomEventInt];

    return this.generateMessageWithNames(eventMsg, eventLog, selectedPlayer);
  }

  async randomItemEventMessage(selectedPlayer, item) {
    const randomEventInt = await this.randomBetween(0, messages.event.item.length - 1);
    const { eventMsg, eventLog } = messages.event.item[randomEventInt];

    return this.generateMessageWithNames(eventMsg, eventLog, selectedPlayer, item);
  }

  async randomGambleEventMessage(selectedPlayer, luckGambleGold, isWin) {
    if (isWin) {
      const randomEventInt = await this.randomBetween(0, messages.event.gamble.win.length - 1);
      const { eventMsg, eventLog } = messages.event.gamble.win[randomEventInt];

      return this.generateMessageWithNames(eventMsg, eventLog, selectedPlayer, undefined, luckGambleGold);
    }

    const randomEventInt = await this.randomBetween(0, messages.event.gamble.lose.length - 1);
    const { eventMsg, eventLog } = messages.event.gamble.lose[randomEventInt];

    return this.generateMessageWithNames(eventMsg, eventLog, selectedPlayer, undefined, luckGambleGold);
  }

  async randomDeathEventMessage() {
    const randomEventInt = await this.randomBetween(0, messages.event.death.length - 1);
    const { eventMsg, eventLog } = messages.event.death[randomEventInt];

    return {eventMsg, eventLog};
  }

  formatLeaderboards(subjectKey) {
    if (subjectKey.includes('.')) {
      if (subjectKey.includes('gold.current')) {
        return subjectKey.replace('gold.current', 'Gold');
      }
      if (subjectKey.includes('lottery.won')) {
        return subjectKey.replace('lottery.won', 'Lottery Wins');
      }
      if (subjectKey.includes('gold.sold.total')) {
        return subjectKey.replace('gold.sold.total', 'Gold From Selling');
      }
      if (subjectKey.includes('skills.total.level')) {
        return subjectKey.replace('skills.total.level', 'Total Skill Levels');
      }
      if (subjectKey.includes('deaths.mob')) {
        return subjectKey.replace('deaths.mob', 'Killed by Mob');
      }
      if (subjectKey.includes('deaths.player')) {
        return subjectKey.replace('deaths.player', 'Killed by Player');
      }
      if (subjectKey.includes('kills.player')) {
        return subjectKey.replace('kills.player', 'Player Kills');
      }
      if (subjectKey.includes('quest.completed')) {
        return subjectKey.replace('quest.completed', 'Completed Quests');
      }

      return subjectKey.split('.')[0];
    }

    if (subjectKey.includes('level')) {
      return subjectKey.replace('level', 'Level');
    }
    if (subjectKey.includes('gold')) {
      return subjectKey.replace('gold', 'Gold');
    }
    if (subjectKey.includes('lottery')) {
      return subjectKey.replace('lottery', 'Wins');
    }
    if (subjectKey.includes('skills')) {
      return subjectKey.replace('skills', 'Level');
    }
    if (subjectKey.includes('spellCast')) {
      return subjectKey.replace('spellCast', 'Spells Cast');
    }
    if (subjectKey.includes('currentBounty')) {
      return subjectKey.replace('currentBounty', 'Bounty');
    }
    if (subjectKey.includes('events')) {
      return subjectKey.replace('events', 'Events');
    }
    if (subjectKey.includes('deaths')) {
      return subjectKey.replace('deaths', 'Deaths');
    }
    if (subjectKey.includes('kills')) {
      return subjectKey.replace('kills', 'Kills');
    }
    if (subjectKey.includes('quest')) {
      return subjectKey.replace('quest', 'Quests');
    }
  }
}
module.exports = Helper;
