const mongoose = require('mongoose');
const mapSchema = require('./map');
const { questSchema, newQuest } = require('./quest');
const Map = require('../../game/utils/Map');
const { equipment } = require('../../utils/enumHelper');

const MapClass = new Map();

const playerSchema = mongoose.Schema({
  discordId: {
    type: String,
    index: {
      unique: true,
      dropDups: true
    }
  },
  personalMultiplier: {
    type: Number,
    default: 0
  },
  guildId: {
    type: String,
    default: 'None'
  },
  name: String,
  class: {
    type: String,
    default: 'Wanderer'
  },
  health: Number,
  mana: {
    type: Number,
    default: 50
  },
  experience: {
    current: {
      type: Number,
      default: 0
    },
    lost: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    }
  },
  titles: {
    current: {
      type: String,
      default: 'None'
    },
    unlocked: {
      type: Array,
      default: []
    }
  },
  map: mapSchema,
  previousMap: {
    type: String,
    default: 'None'
  },
  level: Number,
  gold: {
    current: {
      type: Number,
      default: 0
    },
    lost: {
      type: Number,
      default: 0
    },
    stolen: {
      type: Number,
      default: 0
    },
    stole: {
      type: Number,
      default: 0
    },
    dailyLottery: {
      type: Number,
      default: 0
    },
    gambles: {
      won: {
        type: Number,
        default: 0
      },
      lost: {
        type: Number,
        default: 0
      }
    },
    sold: {
      equipment: {
        type: Number,
        default: 0
      },
      mostEquipment: {
        type: Number,
        default: 0
      },
      valuables: {
        type: Number,
        default: 0
      },
      mostValuables: {
        type: Number,
        default: 0
      },
      skillMats: {
        type: Number,
        default: 0
      },
      mostSkillMats: {
        type: Number,
        default: 0
      },
      total: {
        type: Number,
        default: 0
      }
    },
    total: {
      type: Number,
      default: 0
    }
  },
  isMentionInDiscord: {
    type: String,
    default: 'on'
  },
  isPrivateMessage: {
    type: String,
    default: 'off'
  },
  gender: {
    type: String,
    default: 'neutral'
  },
  equipment: {
    helmet: {
      name: {
        type: String,
        default: 'Nothing'
      },
      power: {
        type: Number,
        default: 0
      },
      position: {
        type: String,
        default: 'helmet'
      },
      previousOwners: {
        type: Array,
        default: []
      }
    },
    bodyArmour: {
      name: {
        type: String,
        default: 'Nothing'
      },
      power: {
        type: Number,
        default: 0
      },
      position: {
        type: String,
        default: 'bodyArmour'
      },
      previousOwners: {
        type: Array,
        default: []
      }
    },
    gloves: {
      name: {
        type: String,
        default: 'Nothing'
      },
      power: {
        type: Number,
        default: 0
      },
      position: {
        type: String,
        default: 'gloves'
      },
      previousOwners: {
        type: Array,
        default: []
      }
    },
    weapon: {
      name: {
        type: String,
        default: 'Nothing'
      },
      power: {
        type: Number,
        default: 0
      },
      position: {
        type: String,
        default: 'weapon'
      },
      attackType: {
        type: String,
        default: ''
      },
      previousOwners: {
        type: Array,
        default: []
      }
    },
    amulet: {
      name: {
        type: String,
        default: 'Nothing'
      },
      power: {
        type: Number,
        default: 0
      },
      position: {
        type: String,
        default: 'amulet'
      },
      previousOwners: {
        type: Array,
        default: []
      }
    },
    belt: {
      name: {
        type: String,
        default: 'Nothing'
      },
      power: {
        type: Number,
        default: 0
      },
      position: {
        type: String,
        default: 'belt'
      },
      previousOwners: {
        type: Array,
        default: []
      }
    },
    ringRight: {
      name: {
        type: String,
        default: 'Nothing'
      },
      power: {
        type: Number,
        default: 0
      },
      position: {
        type: String,
        default: 'ringRight'
      },
      previousOwners: {
        type: Array,
        default: []
      }
    },
    ringLeft: {
      name: {
        type: String,
        default: 'Nothing'
      },
      power: {
        type: Number,
        default: 0
      },
      position: {
        type: String,
        default: 'ringLeft'
      },
      previousOwners: {
        type: Array,
        default: []
      }
    },
    relic: {
      name: String,
      str: Number,
      dex: Number,
      end: Number,
      int: Number,
      luk: Number,
      position: String,
      previousOwners: {
        type: Array,
        default: []
      }
    }
  },
  inventory: {
    equipment: {
      type: Array,
      default: []
    },
    consumables: {
      type: Array,
      default: []
    },
    valuables: {
      type: Array,
      default: []
    },
    skillMats: {
      type: Array,
      default: []
    }
  },
  stats: {
    str: Number,
    dex: Number,
    end: Number,
    int: Number,
    luk: Number
  },
  skills: {
    mining: {
      level: {
        type: Number,
        default: 1
      },
      experience: {
        current: {
          type: Number,
          default: 0
        },
        total: {
          type: Number,
          default: 0
        }
      }
    },
    fishing: {
      level: {
        type: Number,
        default: 1
      },
      experience: {
        current: {
          type: Number,
          default: 0
        },
        total: {
          type: Number,
          default: 0
        }
      }
    },
    woodcutting: {
      level: {
        type: Number,
        default: 1
      },
      experience: {
        current: {
          type: Number,
          default: 0
        },
        total: {
          type: Number,
          default: 0
        }
      }
    },
    herbalism: {
      level: {
        type: Number,
        default: 1
      },
      experience: {
        current: {
          type: Number,
          default: 0
        },
        total: {
          type: Number,
          default: 0
        }
      }
    },
    total: {
      level: {
        type: Number,
        default: 4
      },
      experience: {
        type: Number,
        default: 0
      }
    }
  },
  spells: {
    type: Array,
    default: []
  },
  lottery: {
    joined: {
      type: Boolean,
      default: false
    },
    amount: {
      type: Number,
      default: 0
    },
    won: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  },
  isOnline: Boolean,
  createdAt: String,
  events: Number,
  gambles: {
    type: Number,
    default: 0
  },
  stole: {
    type: Number,
    default: 0
  },
  stolen: {
    type: Number,
    default: 0
  },
  spellCast: {
    type: Number,
    default: 0
  },
  currentBounty: {
    type: Number,
    default: 0
  },
  kills: {
    mob: Number,
    player: Number
  },
  battles: {
    won: {
      type: Number,
      default: 0
    },
    lost: {
      type: Number,
      default: 0
    }
  },
  fled: {
    mob: {
      type: Number,
      default: 0
    },
    player: {
      type: Number,
      default: 0,
    },
    you: {
      type: Number,
      default: 0
    }
  },
  travelled: {
    type: Number,
    default: 0
  },
  deaths: {
    mob: Number,
    player: Number,
    firstDeath: {
      type: String,
      default: 'never',
    }
  },
  quest: {
    type: questSchema,
    default: newQuest,
    ref: 'Quest'
  },
  updated_at: {
    type: Date,
    default: Date.now,
  }
},
  // TODO remove old createdAt above on next reset
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

const newPlayerObj = (discordId, guildId, name) => {
  return {
    discordId,
    name,
    guildId,
    personalMultiplier: 0,
    class: 'Wanderer',
    health: 105,
    mana: 50,
    experience: {
      current: 0,
      total: 0
    },
    map: MapClass.getRandomTown(),
    titles: {
      current: playerSchema.obj.titles.current.default,
      unlocked: playerSchema.obj.titles.unlocked.default
    },
    level: 1,
    gold: {
      current: 0,
      stolen: 0,
      stole: 0,
      total: 0,
      dailyLottery: 0
    },
    isMentionInDiscord: guildId === '390509935097675777' ? 'on' : 'off',
    isPrivateMessage: 'off',
    gender: 'neutral',
    equipment: {
      helmet: equipment.empty.helmet,
      bodyArmour: equipment.starter.bodyArmour,
      gloves: equipment.empty.gloves,
      weapon: equipment.empty.weapon,
      amulet: equipment.empty.amulet,
      belt: equipment.empty.belt,
      ringRight: equipment.empty.ringRight,
      ringLeft: equipment.empty.ringLeft,
      relic: equipment.empty.relic
    },
    inventory: {
      equipment: [],
      consumables: [],
      valuables: [],
      skillMats: []
    },
    stats: {
      str: 1,
      dex: 1,
      end: 1,
      int: 1,
      luk: 1
    },
    skills: {
      mining: {
        level: 1,
        experience: {
          current: 0,
          total: 0
        }
      },
      fishing: {
        level: 1,
        experience: {
          current: 0,
          total: 0
        }
      },
      woodcutting: {
        level: 1,
        experience: {
          current: 0,
          total: 0
        }
      },
      herbalism: {
        level: 1,
        experience: {
          current: 0,
          total: 0
        }
      },
      total: {
        level: 4,
        experience: 0
      }
    },
    spells: [],
    lottery: {
      joined: false,
      amount: 0,
      won: 0,
      count: 0
    },
    isOnline: true,
    createdAt: new Date().getTime(),
    events: 0,
    gambles: 0,
    stole: 0,
    stolen: 0,
    spellCast: 0,
    currentBounty: 0,
    kills: {
      mob: 0,
      player: 0
    },
    fled: {
      mob: 0,
      player: 0,
      you: 0
    },
    battles: {
      won: 0,
      lost: 0,
      firstDeath: 0
    },
    travelled: 0,
    deaths: {
      mob: 0,
      player: 0,
      firstDeath: 'never'
    },
    quest: newQuest
  };
};

const resetPlayerObj = {
  class: 'Wanderer',
  health: 105,
  mana: 50,
  experience: {
    current: 0,
    lost: 0,
    total: 0
  },
  // TODO: Convert rest of variables to utilize schema default instead of hardcoding
  titles: {
    current: playerSchema.obj.titles.current.default,
    unlocked: playerSchema.obj.titles.unlocked.default
  },
  personalMultiplier: 0,
  level: 1,
  gold: {
    current: 0,
    lost: 0,
    stolen: 0,
    stole: 0,
    dailyLottery: 0,
    gambles: {
      won: 0,
      lost: 0
    },
    sold: {
      equipment: 0,
      mostEquipment: 0,
      valuables: 0,
      mostValuables: 0,
      skillMats: 0,
      mostSkillMats: 0,
      total: 0
    },
    total: 0
  },
  'equipment.helmet': {
    name: 'Nothing',
    power: 0.15,
    position: 'helmet',
    previousOwners: []
  },
  'equipment.bodyArmour': {
    name: 'Linen Shirt',
    power: 0.75,
    position: 'bodyArmour',
    previousOwners: []
  },
  'equipment.gloves': {
    name: 'Nothing',
    power: 0.15,
    position: 'gloves',
    previousOwners: []
  },
  'equipment.weapon': {
    name: 'Training Sword',
    power: 0.75,
    position: 'weapon',
    attackType: 'melee',
    previousOwners: []
  },
  'equipment.amulet': {
    name: 'Nothing',
    power: 0,
    position: 'amulet',
    previousOwners: []
  },
  'equipment.belt': {
    name: 'Nothing',
    power: 0,
    position: 'belt',
    previousOwners: []
  },
  'equipment.ringRight': {
    name: 'Nothing',
    power: 0,
    position: 'ringRight',
    previousOwners: []
  },
  'equipment.ringLeft': {
    name: 'Nothing',
    power: 0,
    position: 'ringLeft',
    previousOwners: []
  },
  inventory: {
    equipment: [],
    consumables: [],
    valuables: [],
    skillMats: []
  },
  stats: {
    str: 1,
    dex: 1,
    end: 1,
    int: 1,
    luk: 1
  },
  skills: {
    mining: {
      level: 1,
      experience: {
        current: 0,
        total: 0
      }
    },
    fishing: {
      level: 1,
      experience: {
        current: 0,
        total: 0
      }
    },
    woodcutting: {
      level: 1,
      experience: {
        current: 0,
        total: 0
      }
    },
    herbalism: {
      level: 1,
      experience: {
        current: 0,
        total: 0
      }
    },
    total: {
      level: 4,
      experience: 0
    }
  },
  spells: [],
  lottery: {
    joined: false,
    amount: 0,
    won: 0,
    count: 0
  },
  isOnline: true,
  createdAt: new Date().getTime(),
  events: 0,
  gambles: 0,
  stole: 0,
  stolen: 0,
  spellCast: 0,
  currentBounty: 0,
  kills: {
    mob: 0,
    player: 0
  },
  fled: {
    mob: 0,
    player: 0,
    you: 0
  },
  battles: {
    won: 0,
    lost: 0,
    firstDeath: 0
  },
  travelled: 0,
  deaths: {
    mob: 0,
    player: 0,
    firstDeath: 'never'
  },
  quest: newQuest,
};

module.exports = { playerSchema, newPlayerObj, resetPlayerObj };
