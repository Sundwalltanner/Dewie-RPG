
const spells = {
  strength: [
    normal = {
      name: 'Normal',
      power: 1,
      rarity: 100,
    },
    channeled = {
      name: 'Channeled',
      power: 2,
      rarity: 25
    },
    empowered = {
      name: 'Empowered',
      power: 3,
      rarity: 5,
    }
  ],

  spell: [
    heal = {
      name: 'Heal',
      description: 'Heals player',
      type: 'self',
      power: 1,
      chance: 50,
      rarity: 75
    },
    fireball = {
      name: 'Fireball',
      description: 'Shoots a fireball at the target',
      type: 'target',
      power: 1,
      chance: 50,
      rarity: 100
    },
    arc = {
      name: 'Arc',
      description: 'Stretches an arc of lightning from the caster to the target',
      type: 'target',
      power: 2,
      chance: 50,
      rarity: 80
    },
    arcticBreath = {
      name: 'Arctic Breath',
      description: 'Fire an icy projectile that bursts on impact',
      type: 'target',
      power: 3,
      chance: 50,
      rarity: 70
    },
    ballLightning = {
      name: 'Ball Lightning',
      description: 'Fires a slow-moving ball of lightning toward the target',
      type: 'target',
      power: 3,
      chance: 50,
      rarity: 70
    },
    coldSnap = {
      name: 'Cold Snap',
      description: 'Creates a sudden burst of cold near the target',
      type: 'target',
      power: 3,
      chance: 50,
      rarity: 70
    },
    firestorm = {
      name: 'Firestorm',
      description: 'Flaming bolts rain down over the target',
      type: 'target',
      power: 4,
      chance: 50,
      rarity: 50
    },
    flameblast = {
      name: 'Flameblast',
      description: 'Causes a large fiery explosion near the target',
      type: 'target',
      power: 3,
      chance: 50,
      rarity: 70
    },
    frostBomb = {
      name: 'Frost Bomb',
      description: 'Creates a crystal near the target that pulses with cold',
      type: 'target',
      power: 3,
      chance: 50,
      rarity: 70
    },
    frostbolt = {
      name: 'Frostbolt',
      description: 'Fire a slow-moving projectile that pierces through the target',
      type: 'target',
      power: 2,
      chance: 50,
      rarity: 80
    },
    glacialCascade = {
      name: 'Glacial Cascade',
      description: 'Icicles emerge from the ground in a series of small bursts near the target',
      type: 'target',
      power: 4,
      chance: 50,
      rarity: 50
    },
    iceSpear = {
      name: 'Ice Spear',
      description: 'Launches shards of ice at the target in rapid succession',
      type: 'target',
      power: 2,
      chance: 50,
      rarity: 80
    },
    incinerate = {
      name: 'Incinerate',
      description: 'Continuously launches a torrent of fire from your hand, repeatedly damaging the target',
      type: 'target',
      power: 3,
      chance: 50,
      rarity: 70
    },
    magmaOrb = {
      name: 'Magma Orb',
      description: 'Lob a fiery orb that explodes as it strikes the ground',
      type: 'target',
      power: 2,
      chance: 50,
      rarity: 80
    },
    orbOfStorms = {
      name: 'Orb of Storms',
      description: 'Creates a stationary electrical orb that frequently unleashes a splitting bolt of lightning at the target',
      type: 'target',
      power: 3,
      chance: 50,
      rarity: 70
    },
    spark = {
      name: 'Spark',
      description: 'Launches unpredictable sparks that move randomly until they hit a target or expire',
      type: 'target',
      power: 1,
      chance: 50,
      rarity: 100
    },
  ]
};
module.exports = spells;
