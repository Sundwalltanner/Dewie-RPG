const { guildID } = require('../../settings');

const enumHelper = {
  logTypes: {
    action: 'ACTION',
    move: 'MOVE',
    pvp: 'PVP'
  },

  playableStatus: [
    'online',
    'idle',
    'dnd'
  ],

  pmMode: {
    on: 'on',
    off: 'off',
    filtered: 'filtered'
  },

  map: {
    types: {
      town: 'Town'
    },
    biomes: {
      land: 'Land',
      coast: 'Coast',
      town: 'Town',
      haunted: 'Haunted',
      forest: 'Forest',
      plains: 'Plains',
      mountains: 'Mountains',
      swamp: 'Swamp',
      grassland: 'Grassland',
      caves: 'Caves',
      plateau: 'Plateau',
      moors: 'Moors',
      desert: 'Desert'
    }
  },

  battle: {
    outcomes: {
      win: 'win',
      lost: 'lost',
      fled: 'fled'
    }
  },

  inventory: {
    maxEquipmentAmount: 10,
    maxConsumablesAmount: 25,
    name: 'Inventory',
    position: [
      'consumable',
      'valuable'
    ]
  },

  maxHealth: (level) => {
    return 100 + (level * 5);
  },

  maxMana: (level) => {
    return 50 + (level * 5);
  },

  equipment: {
    starter: {
      weapon: {
        name: 'Training Sword',
        power: 0.75,
        position: 'weapon',
        attackType: 'melee',
        previousOwners: []
      },
      bodyArmour: {
        name: 'Linen Shirt',
        power: 0.75,
        position: 'bodyArmour',
        previousOwners: []
      }
    },
    empty: {
      helmet: {
        name: 'Nothing',
        power: 0.15,
        position: 'helmet',
        previousOwners: []
      },
      bodyArmour: {
        name: 'Nothing',
        power: 0.15,
        position: 'bodyArmour',
        previousOwners: []
      },
      gloves: {
        name: 'Nothing',
        power: 0.15,
        position: 'gloves',
        previousOwners: []
      },
      weapon: {
        name: 'Fist',
        power: 0.15,
        position: 'weapon',
        attackType: 'melee',
        previousOwners: []
      },
      amulet: {
        name: 'Nothing',
        power: 0,
        position: 'amulet',
        previousOwners: []
      },
      belt: {
        name: 'Nothing',
        power: 0,
        position: 'belt',
        previousOwners: []
      },
      ringRight: {
        name: 'Nothing',
        power: 0,
        position: 'ringRight',
        previousOwners: []
      },
      ringLeft: {
        name: 'Nothing',
        power: 0,
        position: 'ringLeft',
        previousOwners: []
      },
      relic: {
        name: 'Nothing',
        str: 0,
        dex: 0,
        end: 0,
        int: 0,
        luk: 0,
        position: 'relic',
        previousOwners: []
      }
    },
    types: {
      helmet: {
        name: 'Helmet',
        position: 'helmet'
      },
      bodyArmour: {
        name: 'Body Armour',
        position: 'bodyArmour'
      },
      gloves: {
        name: 'Gloves',
        position: 'gloves'
      },
      weapon: {
        name: 'Weapon',
        position: 'weapon'
      },
      amulet: {
        name: 'Amulet',
        position: 'amulet'
      },
      belt: {
        name: 'Belt',
        position: 'belt'
      },
      ringRight: {
        name: 'Right Ring',
        position: 'ringRight'
      },
      ringLeft: {
        name: 'Left Ring',
        position: 'ringLeft'
      },
      relic: {
        name: 'Relic',
        position: 'relic'
      }
    }
  },

  stats: {
    str: 'Strength',
    dex: 'Dexterity',
    end: 'Endurance',
    int: 'Intelligence',
    luk: 'Luck'
  },

  skills: {
    mining: 'Mining',
    fishing: 'Fishing',
    woodcutting: 'Woodcutting',
    herbalism: 'Herbalism',
    total: 'Total'
  },

  classes: {
    str: [
      peasant = {
        name: 'Peasant',
        level: 0
      },
      fighter = {
        name: 'Fighter',
        level: 5
      },
      gladiator = {
        name: 'Gladiator',
        level: 10
      },
      lancer = {
        name: 'Lancer',
        level: 15
      },
      dragoon = {
        name: 'Dragoon',
        level: 20
      },
      deathKnight = {
        name: 'Death Knight',
        level: 25
      },
    ],
    dex: [
      rogue = {
        name: 'Rogue',
        level: 0
      },
      ranger = {
        name: 'Ranger',
        level: 5
      },
      duelist = {
        name: 'Duelist',
        level: 10
      },
      strider = {
        name: 'Strider',
        level: 15
      },
      shadowWalker = {
        name: 'Shadow Walker',
        level: 20
      },
      bladesinger = {
        name: 'Bladesinger',
        level: 25
      },
    ],
    end: [
      warrior = {
        name: 'Warrior',
        level: 0
      },
      paladin = {
        name: 'Paladin',
        level: 5
      },
      marauder = {
        name: 'Marauder',
        level: 10
      },
      gladiator = {
        name: 'Gladiator',
        level: 15
      },
      darkKnight = {
        name: 'Dark Knight',
        level: 20
      },
      gunbreaker = {
        name: 'Gunbreaker',
        level: 25
      },
    ],
    int: [
      apprentice = {
        name: 'Apprentice',
        level: 0
      },
      whiteMage = {
        name: 'White Mage',
        level: 5
      },
      blackMage = {
        name: 'Black Mage',
        level: 10
      },
      elementalist = {
        name: 'Elementalist',
        level: 15
      },
      redMage = {
        name: 'Red Mage',
        level: 20
      },
      sorcerer = {
        name: 'Sorcerer',
        level: 25
      },
    ],
  },

  roamingNpcs: [
    pyddur = {
      name: 'Pyddur, God of Beer',
      discordId: 'pyddur'
    }
  ],

  // if .fill(undefined) is not used to fill the array with any data, the undefined pointers make the array return as [] with a length of 30 even while mapping.
  mockPlayers: new Array(30)
    .fill(undefined)
    .map((obj, index) => Object.assign({}, {
      name: `Mocktester${index}`,
      discordId: `Mocktester${index}`,
      guildId: guildID
    })),

  // source cited: https://en.wiktionary.org/wiki/Appendix:English_third-person_singular_pronouns
  genders: {
    male: {
      he: 'he',
      his: 'his',
      him: 'him',
      himself: 'himself',
    },
    female: {
      he: 'she',
      his: 'her',
      him: 'her',
      himself: 'herself',
    },
    neutral: {
      he: 'they',
      his: 'their',
      him: 'them',
      himself: 'themself',
    },
    neuter: {
      he: 'it',
      his: 'its',
      him: 'it',
      himself: 'itself',
    }
  },

  inventorySelectFields: {
    name: 1,
    stats: 1,
    equipment: 1,
    inventory: 1
  },

  playerEventLogSelectFields: {
    name: 1,
    pastEvents: 1
  },

  pvpLogSelectFields: {
    name: 1,
    stole: 1,
    stolen: 1,
    kills: 1,
    battles: 1,
    pastPvpEvents: 1
  },

  statsSelectFields: {
    name: 1,
    health: 1,
    class: 1,
    mana: 1,
    level: 1,
    'titles.current': 1,
    personalMultiplier: 1,
    'experience.current': 1,
    'experience.lost': 1,
    'experience.total': 1,
    gender: 1,
    events: 1,
    'gold.current': 1,
    'gold.lost': 1,
    'gold.stole': 1,
    'gold.stolen': 1,
    'gold.dailyLottery': 1,
    'gold.gambles.won': 1,
    'gold.gambles.lost': 1,
    'gold.sold.equipment': 1,
    'gold.sold.mostEquipment': 1,
    'gold.sold.valuables': 1,
    'gold.sold.mostValuables': 1,
    'gold.sold.skillMats': 1,
    'gold.sold.mostSkillMats': 1,
    'gold.sold.total': 1,
    'gold.total': 1,
    'lottery.won': 1,
    'lottery.count': 1,
    equipment: 1,
    map: 1,
    currentBounty: 1,
    stats: 1,
    skills: 1,
    'skills.mining': 1,
    'skills.mining.level': 1,
    'skills.mining.experience': 1,
    'skills.mining.experience.current': 1,
    'skills.mining.experience.total': 1,
    'skills.fishing': 1,
    'skills.fishing.level': 1,
    'skills.fishing.experience': 1,
    'skills.fishing.experience.current': 1,
    'skills.fishing.experience.total': 1,
    'skills.woodcutting': 1,
    'skills.woodcutting.level': 1,
    'skills.woodcutting.experience': 1,
    'skills.woodcutting.experience.current': 1,
    'skills.woodcutting.experience.total': 1,
    'skills.herbalism': 1,
    'skills.herbalism.level': 1,
    'skills.herbalism.experience': 1,
    'skills.herbalism.experience.current': 1,
    'skills.herbalism.experience.total': 1,
    'skills.total': 1,
    'skills.total.level': 1,
    'skills.total.experience': 1,
    createdAt: 1,
    gambles: 1,
    stole: 1,
    stolen: 1,
    spells: 1,
    kills: 1,
    fled: 1,
    battles: 1,
    travelled: 1,
    deaths: 1,
    'quest.questMob.name': 1,
    'quest.questMob.count': 1,
    'quest.questMob.killCount': 1,
    'quest.completed': 1,
    'quest.updated_at': 1,
    spellCast: 1
  },

  equipSelectFields: {
    name: 1,
    stats: 1,
    equipment: 1
  },

  leaderboardStats: [
    { level: -1 },
    { 'gold.current': -1 },
    { 'lottery.won': -1 },
    { 'gold.sold.total': -1},
    { 'skills.total.level': -1 },
    { spellCast: -1 },
    { currentBounty: -1 },
    { events: -1 },
    { 'deaths.mob': -1 },
    { 'deaths.player': -1 },
    { 'kills.player': -1 },
    { 'quest.completed': -1 }
  ]
};
module.exports = enumHelper;