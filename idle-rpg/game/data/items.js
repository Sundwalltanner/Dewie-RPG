const items = {
  rarity: [
    crack = {
      name: 'Cracked',
      power: 0.25,
      gold: 1,
      rarity: 100
    },
    crude = {
      name: 'Crude',
      power: 0.5,
      gold: 1,
      rarity: 75
    },
    battered = {
      name: 'Battered',
      power: 0.75,
      gold: 1,
      rarity: 75
    },
    common = {
      name: 'Common',
      power: 1,
      gold: 2,
      rarity: 100
    },
    uncommon = {
      name: 'Uncommon',
      power: 1.25,
      gold: 3,
      rarity: 50
    },
    sturdy = {
      name: 'Sturdy',
      power: 1.5,
      gold: 4,
      rarity: 40
    },
    reinforced = {
      name: 'Reinforced',
      power: 1.75,
      gold: 4,
      rarity: 30
    },
    unique = {
      name: 'Unique',
      power: 2,
      gold: 5,
      rarity: 25
    },
    hardened = {
      name: 'Hardened',
      power: 2.25,
      gold: 6,
      rarity: 20
    },
    rare = {
      name: 'Rare',
      power: 2.5,
      gold: 7,
      rarity: 15
    },
    magic = {
      name: 'Magic',
      power: 2.75,
      gold: 10,
      rarity: 10
    },
    epic = {
      name: 'Epic',
      power: 3,
      gold: 15,
      rarity: 7
    },
    legendary = {
      name: 'Legendary',
      power: 3.25,
      gold: 20,
      rarity: 6
    },
    mythical = {
      name: 'Mythical',
      power: 3.5,
      gold: 25,
      rarity: 5
    },
    feltouched = {
      name: 'Fel-Touched',
      power: 3.75,
      gold: 30,
      rarity: 4
    },
    pearlescent = {
      name: 'Pearlescent',
      power: 4,
      gold: 35,
      rarity: 3
    },
    ancient = {
      name: 'Ancient',
      power: 4.25,
      gold: 40,
      rarity: 2,
    },
    godly = {
      name: 'Godly',
      power: 4.5,
      gold: 45,
      rarity: 1
    }
  ],

  material: [
    wood = {
      name: 'Wooden',
      power: 0.25,
      gold: 5,
      rarity: 100
    },
    stone = {
      name: 'Stone',
      power: 0.5,
      gold: 5,
      rarity: 100
    },
    copper = {
      name: 'Copper',
      power: 0.75,
      gold: 8,
      rarity: 90
    },
    iron = {
      name: 'Iron',
      power: 1,
      gold: 10,
      rarity: 70
    },
    bronze = {
      name: 'Bronze',
      power: 1.25,
      gold: 13,
      rarity: 50
    },
    gold = {
      name: 'Gold',
      power: 1.45,
      gold: 15,
      rarity: 20
    },
    bone = {
      name: 'Bone',
      power: 1.75,
      gold: 15,
      rarity: 40
    },
    steel = {
      name: 'Steel',
      power: 2,
      gold: 15,
      rarity: 30
    },
    diamond = {
      name: 'Diamond',
      power: 2.25,
      gold: 22,
      rarity: 10
    },
    mithril = {
      name: 'Mithril',
      power: 2.5,
      gold: 25,
      rarity: 5
    },
    adamant = {
      name: 'Adamantine',
      power: 2.75,
      gold: 30,
      rarity: 3
    },
  ],

  type: [
    helmet = [
      hat = {
        name: 'Hat',
        position: 'helmet',
        power: 0.25,
        gold: 1,
        rarity: 100
      },
      coneHelmet = {
        name: 'Cone Helmet',
        position: 'helmet',
        power: 0.5,
        gold: 2,
        rarity: 80
      },
      helm = {
        name: 'Helm',
        position: 'helmet',
        power: 0.25,
        gold: 1,
        rarity: 80
      },
      hornedHelmet = {
        name: 'Horned Helmet',
        position: 'helmet',
        power: 0.5,
        gold: 2,
        rarity: 80
      },
      greatHelmet = {
        name: 'Great Helmet',
        position: 'helmet',
        power: 0.75,
        gold: 3,
        rarity: 80
      },
      spikedHelmet = {
        name: 'Spiked Helmet',
        position: 'helmet',
        power: 1,
        gold: 3,
        rarity: 80
      },
      minerHelmet = {
        name: 'Miner\'s Helmet',
        position: 'helmet',
        power: 1.25,
        gold: 3,
        rarity: 80
      },
      kettleHelm = {
        name: 'Kettle Helm',
        position: 'helmet',
        power: 1.5,
        gold: 3,
        rarity: 80
      },
      chainHood = {
        name: 'Chainmail Hood',
        position: 'helmet',
        power: 1.75,
        gold: 3,
        rarity: 80
      },
      basinet = {
        name: 'Basinet',
        position: 'helmet',
        power: 2,
        gold: 3,
        rarity: 80
      },
      bucketHelm = {
        name: 'Bucket Helm',
        position: 'helmet',
        power: 2.25,
        gold: 3,
        rarity: 80
      },
      nasalHelmet = {
        name: 'Nasal Helmet',
        position: 'helmet',
        power: 2.5,
        gold: 3,
        rarity: 80
      },
      bucket = {
        name: 'Bucket',
        position: 'helmet',
        power: 1,
        gold: 3,
        rarity: 80
      },
      scareMask = {
        name: 'Scare Mask',
        position: 'helmet',
        power: 1,
        gold: 3,
        rarity: 80
      },
      plagueMask = {
        name: 'Plague Mask',
        position: 'helmet',
        power: 1,
        gold: 3,
        rarity: 80
      },
      festivalMask = {
        name: 'Festival Mask',
        position: 'helmet',
        power: 1,
        gold: 3,
        rarity: 80
      },
      ravenMask = {
        name: 'Raven Mask',
        position: 'helmet',
        power: 1,
        gold: 3,
        rarity: 80
      },
      callousMask = {
        name: 'Callous Mask',
        position: 'helmet',
        power: 1,
        gold: 3,
        rarity: 80
      },
      regicideMask = {
        name: 'Regicide Mask',
        position: 'helmet',
        power: 1,
        gold: 3,
        rarity: 80
      },
      harlequinMask = {
        name: 'Harlequin Mask',
        position: 'helmet',
        power: 1,
        gold: 3,
        rarity: 80
      },
      vaalMask = {
        name: 'Vaal Mask',
        position: 'helmet',
        power: 1,
        gold: 3,
        rarity: 80
      },
      deicideMask = {
        name: 'Deicide Mask',
        position: 'helmet',
        power: 1,
        gold: 3,
        rarity: 80
      },
      Abyssus = {
        name: 'Abyssus',
        position: 'helmet',
        power: 2,
        gold: 3,
        rarity: 80
      },
      formlessInferno = {
        name: 'Formless Inferno',
        position: 'helmet',
        power: 3,
        gold: 6,
        rarity: 80
      },
      martyrsCrown = {
        name: 'Martyr\'s Crown',
        position: 'helmet',
        power: 2,
        gold: 5,
        rarity: 80
      },
      crownOfEyes = {
        name: 'Crown of Eyes',
        position: 'helmet',
        power: 3,
        gold: 4,
        rarity: 80
      },
    ],

    bodyArmour = [
      chainMail = {
        name: 'Chain Mail',
        position: 'bodyArmour',
        power: 0.25,
        gold: 1,
        rarity: 100
      },
      thinBody = {
        name: 'Cheap Plate Armour',
        position: 'bodyArmour',
        power: 0.5,
        gold: 2,
        rarity: 50
      },
      fullBody = {
        name: 'Highend Plate Armour',
        position: 'bodyArmour',
        power: 0.75,
        gold: 3,
        rarity: 25
      },
      scale = {
        name: 'Scale Armour',
        position: 'bodyArmour',
        power: 1,
        gold: 3,
        rarity: 30
      },
      studded = {
        name: 'Studded Armour',
        position: 'bodyArmour',
        power: 1.25,
        gold: 3,
        rarity: 60
      },
      segmented = {
        name: 'Segmented Armour',
        position: 'bodyArmour',
        power: 1.5,
        gold: 3,
        rarity: 50
      },
      bramblejack = {
        name: 'Bramblejack',
        position: 'bodyArmour',
        power: 1.5,
        gold: 3,
        rarity: 50
      },
      solarisLorica = {
        name: 'Solaris Lorica',
        position: 'bodyArmour',
        power: 1.5,
        gold: 3,
        rarity: 50
      },
      wallOfBrambles = {
        name: 'Wall of Brambles',
        position: 'bodyArmour',
        power: 1.5,
        gold: 3,
        rarity: 50
      },
      greedsEmbrace = {
        name: 'Greed\'s Embrace',
        position: 'bodyArmour',
        power: 1.5,
        gold: 3,
        rarity: 50
      },
      lioneyesVision = {
        name: 'Lioneye\'s Vision',
        position: 'bodyArmour',
        power: 1.5,
        gold: 3,
        rarity: 50
      },
      deathsOath = {
        name: 'Death\'s Oath',
        position: 'bodyArmour',
        power: 1.5,
        gold: 3,
        rarity: 50
      },
      craiceannsCarapace = {
        name: 'Craiceann\'s Carapace',
        position: 'bodyArmour',
        power: 1.5,
        gold: 3,
        rarity: 50
      },
      kaomsHeart = {
        name: 'Kaom\'s Heart',
        position: 'bodyArmour',
        power: 1.5,
        gold: 3,
        rarity: 50
      },
      skinOfTheLords = {
        name: 'Skin of the Lords',
        position: 'bodyArmour',
        power: 1.5,
        gold: 3,
        rarity: 50
      },
      tabulaRasa = {
        name: 'Tabula Rasa',
        position: 'bodyArmour',
        power: 1.5,
        gold: 3,
        rarity: 50
      },
      soalMantle = {
        name: 'Soal Mantle',
        position: 'bodyArmour',
        power: 1.5,
        gold: 3,
        rarity: 50
      },
    ],

    gloves = [
      gauntlets = {
        name: 'Gauntlets',
        position: 'gloves',
        power: 0.25,
        gold: 1,
        rarity: 100
      },
      platedGauntlets = {
        name: 'Plated Gauntlets',
        position: 'gloves',
        power: 0.5,
        gold: 2,
        rarity: 50
      },
      spikedGauntlets = {
        name: 'Spiked Gauntlets',
        position: 'gloves',
        power: 0.75,
        gold: 3,
        rarity: 25
      },
      gloves = {
        name: 'Gloves',
        position: 'gloves',
        power: 0.25,
        gold: 1,
        rarity: 80
      },
      stealthGloves = {
        name: 'Stealth Gloves',
        position: 'gloves',
        power: 0.5,
        gold: 2,
        rarity: 50
      },
      grippedGloves = {
        name: 'Gripped Gloves',
        position: 'gloves',
        power: 0.5,
        gold: 2,
        rarity: 50
      },
      fingerlessGloves = {
        name: 'Fingerless Gloves',
        position: 'gloves',
        power: 0.35,
        gold: 2,
        rarity: 65
      },
      chainGloves = {
        name: 'Chain Gloves',
        position: 'gloves',
        power: 0.5,
        gold: 2,
        rarity: 50
      },
      zealotGloves = {
        name: 'Zealot Gloves',
        position: 'gloves',
        power: 1,
        gold: 3,
        rarity: 30
      },
      soldierGloves = {
        name: 'Soldier Gloves',
        position: 'gloves',
        power: 0.5,
        gold: 2,
        rarity: 50
      },
      legionGloves = {
        name: 'Legion Gloves',
        position: 'gloves',
        power: 1,
        gold: 3,
        rarity: 30
      },
      crusaderGloves = {
        name: 'Crusader Gloves',
        position: 'gloves',
        power: 1,
        gold: 3,
        rarity: 30
      },
      wrappedMitts = {
        name: 'Wrapped Mitts',
        position: 'gloves',
        power: 0.25,
        gold: 1,
        rarity: 80
      },
      strappedMitts = {
        name: 'Strapped Mitts',
        position: 'gloves',
        power: 0.25,
        gold: 1,
        rarity: 80
      },
      claspedMitts = {
        name: 'Clasped Mitts',
        position: 'gloves',
        power: 0.25,
        gold: 1,
        rarity: 80
      },
      trapperMitts = {
        name: 'Trapper Mitts',
        position: 'gloves',
        power: 0.25,
        gold: 1,
        rarity: 80
      },
      ambushMitts = {
        name: 'Ambush Mitts',
        position: 'gloves',
        power: 0.25,
        gold: 1,
        rarity: 80
      },
      carnalMitts = {
        name: 'Carnal Mitts',
        position: 'gloves',
        power: 0.5,
        gold: 2,
        rarity: 50
      },
      assassinsMitts = {
        name: 'Assassin\'s Mitts',
        position: 'gloves',
        power: 1,
        gold: 3,
        rarity: 30
      },
      murderMitts = {
        name: 'Murder Mitts',
        position: 'gloves',
        power: 1,
        gold: 3,
        rarity: 30
      },
    ],

    weapon = [
      pincer = {
        name: 'Pincer',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 2,
        rarity: 100
      },
      claw = {
        name: 'Claw',
        position: 'weapon',
        attackType: 'melee',
        power: 3,
        gold: 3,
        rarity: 100
      },
      hatchet = {
        name: 'Hatchet',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 2,
        rarity: 100
      },
      cleaver = {
        name: 'Cleaver',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 4,
        rarity: 80
      },
      tomahawk = {
        name: 'Tomahawk',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 3,
        rarity: 80
      },
      doubleAxe = {
        name: 'Double Axe',
        position: 'weapon',
        attackType: 'melee',
        power: 3,
        gold: 4,
        rarity: 80
      },
      labrys = {
        name: 'Labrys',
        position: 'weapon',
        attackType: 'melee',
        power: 3,
        gold: 4,
        rarity: 80
      },
      shortBow = {
        name: 'Short Bow',
        position: 'weapon',
        attackType: 'range',
        power: 1,
        gold: 1,
        rarity: 80
      },
      longBow = {
        name: 'Long Bow',
        position: 'weapon',
        attackType: 'range',
        power: 2,
        gold: 2,
        rarity: 80
      },
      compositeBow = {
        name: 'Composite Bow',
        position: 'weapon',
        attackType: 'range',
        power: 3,
        gold: 3,
        rarity: 80
      },
      recurveBow = {
        name: 'Recurve Bow',
        position: 'weapon',
        attackType: 'range',
        power: 3,
        gold: 4,
        rarity: 80
      },
      nailedFist = {
        name: 'Nailed Fist',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 2,
        rarity: 80
      },
      doubleClaw = {
        name: 'Double Claw',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 2,
        rarity: 80
      },
      throatStabber = {
        name: 'Throat Stabber',
        position: 'weapon',
        attackType: 'melee',
        power: 3,
        gold: 4,
        rarity: 80
      },
      eyeGouger = {
        name: 'Eye Gouger',
        position: 'weapon',
        attackType: 'melee',
        power: 3,
        gold: 4,
        rarity: 80
      },
      shank = {
        name: 'Shank',
        position: 'weapon',
        attackType: 'melee',
        power: 1,
        gold: 1,
        rarity: 80
      },
      skinningKnife = {
        name: 'Skinning Knife',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 3,
        rarity: 80
      },
      carvingKnife = {
        name: 'Carving Knife',
        position: 'weapon',
        attackType: 'melee',
        power: 3,
        gold: 3,
        rarity: 80
      },
      stiletto = {
        name: 'Stiletto',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 2,
        rarity: 80
      },
      trisula = {
        name: 'Trisula',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 2,
        rarity: 80
      },
      hammer = {
        name: 'Hammer',
        position: 'weapon',
        attackType: 'melee',
        power: 1,
        gold: 1,
        rarity: 80
      },
      spikedClub = {
        name: 'Spiked Club',
        position: 'weapon',
        attackType: 'melee',
        power: 3,
        gold: 3,
        rarity: 80
      },
      flangedMace = {
        name: 'Flanged Mace',
        position: 'weapon',
        attackType: 'melee',
        power: 3,
        gold: 3,
        rarity: 80
      },
      gavel = {
        name: 'Gavel',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 2,
        rarity: 80
      },
      sceptre = {
        name: 'Sceptre',
        position: 'weapon',
        attackType: 'magic',
        power: 2,
        gold: 2,
        rarity: 80
      },
      royalStaff = {
        name: 'Royal Staff',
        position: 'weapon',
        attackType: 'magic',
        power: 3,
        gold: 3,
        rarity: 80
      },
      quarterstaff = {
        name: 'Quarterstaff',
        position: 'weapon',
        attackType: 'magic',
        power: 2,
        gold: 2,
        rarity: 80
      },
      rapier = {
        name: 'Rapier',
        position: 'weapon',
        attackType: 'melee',
        power: 3,
        gold: 3,
        rarity: 80
      },
      bastardSword = {
        name: 'Bastard Sword',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 2,
        rarity: 80
      },
      twoHandedSword = {
        name: 'Two-Handed Sword',
        position: 'weapon',
        attackType: 'melee',
        power: 4,
        gold: 5,
        rarity: 80
      },
      butcherSword = {
        name: 'Butcher Sword',
        position: 'weapon',
        attackType: 'melee',
        power: 3,
        gold: 3,
        rarity: 80
      },
      spiraledWand = {
        name: 'Spiraled Wand',
        position: 'weapon',
        attackType: 'magic',
        power: 3,
        gold: 5,
        rarity: 80
      },
      sageWand = {
        name: 'Sage Wand',
        position: 'weapon',
        attackType: 'magic',
        power: 4,
        gold: 10,
        rarity: 80
      },
      engravedWand = {
        name: 'Engraved Wand',
        position: 'weapon',
        attackType: 'magic',
        power: 3,
        gold: 5,
        rarity: 80
      },
      imbuedWand = {
        name: 'Imbued Wand',
        position: 'weapon',
        attackType: 'magic',
        power: 2,
        gold: 3,
        rarity: 80
      },
      club = {
        name: 'Club',
        position: 'weapon',
        attackType: 'melee',
        power: 1,
        gold: 1,
        rarity: 80
      },
      mace = {
        name: 'Mace',
        position: 'weapon',
        attackType: 'melee',
        power: 1,
        gold: 2,
        rarity: 80
      },
      staff = {
        name: 'Staff',
        position: 'weapon',
        attackType: 'magic',
        power: 1,
        gold: 2,
        rarity: 80
      },
      sword = {
        name: 'Sword',
        position: 'weapon',
        attackType: 'melee',
        power: 1,
        gold: 2,
        rarity: 80
      },
      claymore = {
        name: 'Claymore',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 2,
        rarity: 80
      },
      flail = {
        name: 'Flail',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 2,
        rarity: 80
      },
      wand = {
        name: 'Wand',
        position: 'weapon',
        attackType: 'magic',
        power: 2,
        gold: 2,
        rarity: 80
      },
      bow = {
        name: 'Bow',
        position: 'weapon',
        attackType: 'range',
        power: 1,
        gold: 2,
        rarity: 80
      },
      crossbow = {
        name: 'Crossbow',
        position: 'weapon',
        attackType: 'range',
        power: 2,
        gold: 2,
        rarity: 80
      },
      pike = {
        name: 'Pike',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 3,
        rarity: 80
      },
      halberd = {
        name: 'Halberd',
        position: 'weapon',
        attackType: 'melee',
        power: 3,
        gold: 4,
        rarity: 80
      },
      axe = {
        name: 'Axe',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 4,
        rarity: 80
      },
      maul = {
        name: 'Maul',
        position: 'weapon',
        attackType: 'melee',
        power: 3,
        gold: 5,
        rarity: 80
      },
      scythe = {
        name: 'Scythe',
        position: 'weapon',
        attackType: 'melee',
        power: 4,
        gold: 5,
        rarity: 80
      },
      falchion = {
        name: 'Falchion',
        position: 'weapon',
        attackType: 'melee',
        power: 3,
        gold: 5,
        rarity: 80
      },
      katana = {
        name: 'Katana',
        position: 'weapon',
        attackType: 'melee',
        power: 4,
        gold: 5,
        rarity: 80
      },
      ulfberht = {
        name: 'Ulfberht',
        position: 'weapon',
        attackType: 'melee',
        power: 3,
        gold: 5,
        rarity: 80
      },
      morningStar = {
        name: 'Morning star',
        position: 'weapon',
        attackType: 'melee',
        power: 3,
        gold: 5,
        rarity: 80
      },
      glaive = {
        name: 'Glaive',
        position: 'weapon',
        attackType: 'melee',
        power: 4,
        gold: 5,
        rarity: 80
      },
      sling = {
        name: 'Sling',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 5,
        rarity: 80
      },
      chakram = {
        name: 'Chakram',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 5,
        rarity: 80
      },
      shuriken = {
        name: 'Shuriken',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 5,
        rarity: 80
      },
      spear = {
        name: 'Spear',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 5,
        rarity: 80
      },
      dagger = {
        name: 'Dagger',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 5,
        rarity: 80
      },
      whip = {
        name: 'Tipped Whip',
        position: 'weapon',
        attackType: 'melee',
        power: 2,
        gold: 5,
        rarity: 80
      },
      wizardStaff = {
        name: 'Wizard Staff',
        position: 'weapon',
        attackType: 'magic',
        power: 2,
        gold: 5,
        rarity: 80
      },
    ],

    amulet = [
      coralAmulet = {
        name: 'Coral Amulet',
        position: 'amulet',
        power: 0.25,
        gold: 1,
        rarity: 80
      },
      pauaAmulet = {
        name: 'Paua Amulet',
        position: 'amulet',
        power: 0.25,
        gold: 1,
        rarity: 80
      },
      amberAmulet = {
        name: 'Amber Amulet',
        position: 'amulet',
        power: 0.25,
        gold: 1,
        rarity: 80
      },
      jadeAmulet = {
        name: 'Jade Amulet',
        position: 'amulet',
        power: 0.5,
        gold: 2,
        rarity: 50
      },
      lapisAmulet = {
        name: 'Lapis Amulet',
        position: 'amulet',
        power: 0.5,
        gold: 2,
        rarity: 50
      },
      goldAmulet = {
        name: 'Gold Amulet',
        position: 'amulet',
        power: 0.75,
        gold: 3,
        rarity: 40
      },
      agateAmulet = {
        name: 'Agate Amulet',
        position: 'amulet',
        power: 0.75,
        gold: 4,
        rarity: 30
      },
      citrineAmulet = {
        name: 'Citrine Amulet',
        position: 'amulet',
        power: 0.85,
        gold: 4,
        rarity: 30
      },
      turquoiseAmulet = {
        name: 'Turquoise Amulet',
        position: 'amulet',
        power: 0.85,
        gold: 4,
        rarity: 30
      },
      onyxAmulet = {
        name: 'Onyx Amulet',
        position: 'amulet',
        power: 1,
        gold: 4,
        rarity: 30
      },
      marbleAmulet = {
        name: 'Marble Amulet',
        position: 'amulet',
        power: 1,
        gold: 5,
        rarity: 20
      },
      bluePearlAmulet = {
        name: 'Blue Pearl Amulet',
        position: 'amulet',
        power: 1,
        gold: 5,
        rarity: 20
      },
      ashscaleTalisman = {
        name: 'Ashscale Talisman',
        position: 'amulet',
        power: 1.5,
        gold: 10,
        rarity: 10
      },
    ],

    belt = [
      chainBelt = {
        name: 'Chain Belt',
        position: 'belt',
        power: 0.25,
        gold: 1,
        rarity: 100
      },
      rusticSash = {
        name: 'Rustic Sash',
        position: 'belt',
        power: 0.25,
        gold: 1,
        rarity: 80
      },
      stygianVise = {
        name: 'Stygian Vise',
        position: 'belt',
        power: 0.25,
        gold: 1,
        rarity: 80
      },
      heavyBelt = {
        name: 'Heavy Belt',
        position: 'belt',
        power: 0.5,
        gold: 2,
        rarity: 50
      },
      studdedBelt = {
        name: 'Studded Belt',
        position: 'belt',
        power: 0.5,
        gold: 2,
        rarity: 50
      },
      vanguardBelt = {
        name: 'Vanguard Belt',
        position: 'belt',
        power: 0.5,
        gold: 3,
        rarity: 40
      },
      darknessEnthroned = {
        name: 'Darkness Enthroned',
        position: 'belt',
        power: 0.75,
        gold: 4,
        rarity: 30
      },
      stringOfServitude = {
        name: 'String of Servitude',
        position: 'belt',
        power: 0.75,
        gold: 4,
        rarity: 30
      },
      meginordsGirdle = {
        name: 'Meginord\'s Girdle',
        position: 'belt',
        power: 0.75,
        gold: 4,
        rarity: 30
      },
      wurmsMolt = {
        name: 'Wurm\'s Molt',
        position: 'belt',
        power: 0.75,
        gold: 4,
        rarity: 30
      },
      faminebind = {
        name: 'Faminebind',
        position: 'belt',
        power: 0.85,
        gold: 5,
        rarity: 20
      },
      feastbind = {
        name: 'Feastbind',
        position: 'belt',
        power: 0.85,
        gold: 5,
        rarity: 20
      },
      beltOfTheDeceiver = {
        name: 'Belt of the Deceiver',
        position: 'belt',
        power: 1,
        gold: 10,
        rarity: 10
      },
    ],

    ringRight = [
      coralRing = {
        name: 'Coral Ring',
        position: 'ringRight',
        power: 0.25,
        gold: 1,
        rarity: 100
      },
      pauaRing = {
        name: 'Paua Ring',
        position: 'ringRight',
        power: 0.25,
        gold: 1,
        rarity: 80
      },
      unsetRing = {
        name: 'Unset Ring',
        position: 'ringRight',
        power: 0.25,
        gold: 1,
        rarity: 80
      },
      sapphireRing = {
        name: 'Sapphire Ring',
        position: 'ringRight',
        power: 0.5,
        gold: 2,
        rarity: 50
      },
      topazRing = {
        name: 'Topaz Ring',
        position: 'ringRight',
        power: 0.5,
        gold: 2,
        rarity: 50
      },
      rubyRing = {
        name: 'Ruby Ring',
        position: 'ringRight',
        power: 0.5,
        gold: 3,
        rarity: 40
      },
      moonstoneRing = {
        name: 'Moonstone Ring',
        position: 'ringRight',
        power: 0.75,
        gold: 4,
        rarity: 30
      },
      twoStoneRing = {
        name: 'Two-Stone Ring',
        position: 'ringRight',
        power: 0.75,
        gold: 4,
        rarity: 30
      },
      prismaticRing = {
        name: 'Prismatic Ring',
        position: 'ringRight',
        power: 0.75,
        gold: 4,
        rarity: 30
      },
      opalRing = {
        name: 'Opal Ring',
        position: 'ringRight',
        power: 0.75,
        gold: 4,
        rarity: 30
      },
      goldenHoop = {
        name: 'Golden Hoop',
        position: 'ringRight',
        power: 1,
        gold: 5,
        rarity: 20
      },
      jetRing = {
        name: 'Jet Ring',
        position: 'ringRight',
        power: 1,
        gold: 5,
        rarity: 20
      },
      blackheart = {
        name: 'Blackheart',
        position: 'ringRight',
        power: 2,
        gold: 10,
        rarity: 10
      },
    ],

    ringLeft = [
      coralRing = {
        name: 'Coral Ring',
        position: 'ringLeft',
        power: 0.25,
        gold: 1,
        rarity: 100
      },
      pauaRing = {
        name: 'Paua Ring',
        position: 'ringLeft',
        power: 0.25,
        gold: 1,
        rarity: 80
      },
      unsetRing = {
        name: 'Unset Ring',
        position: 'ringLeft',
        power: 0.25,
        gold: 1,
        rarity: 80
      },
      sapphireRing = {
        name: 'Sapphire Ring',
        position: 'ringLeft',
        power: 0.5,
        gold: 2,
        rarity: 50
      },
      topazRing = {
        name: 'Topaz Ring',
        position: 'ringLeft',
        power: 0.5,
        gold: 2,
        rarity: 50
      },
      rubyRing = {
        name: 'Ruby Ring',
        position: 'ringLeft',
        power: 0.5,
        gold: 3,
        rarity: 40
      },
      moonstoneRing = {
        name: 'Moonstone Ring',
        position: 'ringLeft',
        power: 0.75,
        gold: 4,
        rarity: 30
      },
      twoStoneRing = {
        name: 'Two-Stone Ring',
        position: 'ringLeft',
        power: 0.75,
        gold: 4,
        rarity: 30
      },
      prismaticRing = {
        name: 'Prismatic Ring',
        position: 'ringLeft',
        power: 0.75,
        gold: 4,
        rarity: 30
      },
      opalRing = {
        name: 'Opal Ring',
        position: 'ringLeft',
        power: 0.75,
        gold: 4,
        rarity: 30
      },
      goldenHoop = {
        name: 'Golden Hoop',
        position: 'ringLeft',
        power: 1,
        gold: 5,
        rarity: 20
      },
      jetRing = {
        name: 'Jet Ring',
        position: 'ringLeft',
        power: 1,
        gold: 5,
        rarity: 20
      },
      blackheart = {
        name: 'Blackheart',
        position: 'ringLeft',
        power: 2,
        gold: 10,
        rarity: 10
      },
    ],

    relic = [
      snowFlake = {
        name: 'Snowflake',
        droppedBy: ['Yeti', 'Christmas Gnome'],
        holiday: 'xmas',
        isDroppable: false,
        position: 'relic',
        stats: {
          str: 1,
          dex: 1,
          end: 1,
          int: 1,
          luk: 4,
        },
        gold: 3,
        rarity: 60
      },
      yetiTooth = {
        name: 'Yetis Tooth',
        droppedBy: ['Yeti'],
        holiday: 'xmas',
        isDroppable: false,
        position: 'relic',
        stats: {
          str: 1,
          dex: 1,
          end: 1,
          int: 1,
          luk: 3,
        },
        gold: 3,
        rarity: 60
      },
      candyCane = {
        name: 'Candy Cane',
        droppedBy: ['Yeti', 'Christmas Gnome'],
        holiday: 'xmas',
        isDroppable: false,
        position: 'relic',
        stats: {
          str: 0,
          dex: 0,
          end: 0,
          int: 2,
          luk: 1
        },
        gold: 3,
        rarity: 90
      },
      twizzler = {
        name: 'Pack of Twizzlers',
        droppedBy: ['Some Guy with a Thriller Costume', 'Slenderman'],
        holiday: 'halloween',
        isDroppable: false,
        position: 'relic',
        stats: {
          str: 0,
          dex: 1,
          end: 0,
          int: 1,
          luk: 1
        },
        gold: 2,
        rarity: 90
      },
      corn = {
        name: 'Candy Corn',
        droppedBy: ['Slenderman'],
        holiday: 'halloween',
        isDroppable: false,
        position: 'relic',
        stats: {
          str: 1,
          dex: 0,
          end: 0,
          int: 1,
          luk: 2
        },
        gold: 3,
        rarity: 60
      },
      reeses = {
        name: 'Reese\'s Butter Cups',
        droppedBy: ['Chucky'],
        holiday: 'halloween',
        isDroppable: false,
        position: 'relic',
        stats: {
          str: 1,
          dex: 2,
          end: 1,
          int: 1,
          luk: 2,
        },
        gold: 5,
        rarity: 15
      }
    ],

    consumables = [
      healthPotion = {
        name: 'Health Potion',
        position: 'consumable',
        power: 0.25,
        gold: 15,
        rarity: 100
      }
    ],

    valuables = [
      scrollOfWisdom = {
        name: 'Scroll of Wisdom',
        position: 'valuable',
        gold: 10,
        rarity: 100
      },
      portalScroll = {
        name: 'Portal Scroll',
        position: 'valuable',
        gold: 25,
        rarity: 90
      },
      orbOfTransmutation = {
        name: 'Orb of Transmutation',
        position: 'valuable',
        gold: 25,
        rarity: 90
      },
      blacksmithsWhetstone = {
        name: 'Blacksmith\'s Whetstone',
        position: 'valuable',
        gold: 30,
        rarity: 85
      },
      armourersScrap = {
        name: 'Armourer\'s Scrap',
        position: 'valuable',
        gold: 35,
        rarity: 85
      },
      perandusCoin = {
        name: 'Perandus Coin',
        position: 'valuable',
        gold: 70,
        rarity: 75
      },
      orbOfAugmentation = {
        name: 'Orb of Augmentation',
        position: 'valuable',
        gold: 70,
        rarity: 75
      },
      orbOfAlteration = {
        name: 'Orb of Alteration',
        position: 'valuable',
        gold: 70,
        rarity: 75
      },
      jewellersOrb = {
        name: 'Jeweller\'s Orb',
        position: 'valuable',
        gold: 90,
        rarity: 70
      },
      splinterOfEsh = {
        name: 'Splinter of Esh',
        position: 'valuable',
        gold: 100,
        rarity: 70
      },
      chromaticOrb = {
        name: 'Chromatic Orb',
        position: 'valuable',
        gold: 110,
        rarity: 65
      },
      glassblowersBauble = {
        name: 'Glassblower\'s Bauble',
        position: 'valuable',
        gold: 160,
        rarity: 60
      },
      blessedOrb = {
        name: 'Blessed Orb',
        position: 'valuable',
        gold: 170,
        rarity: 55
      },
      splinterOfXoph = {
        name: 'Splinter of Xoph',
        position: 'valuable',
        gold: 190,
        rarity: 50
      },
      splinterOfTul = {
        name: 'Splinter of Tul',
        position: 'valuable',
        gold: 200,
        rarity: 50
      },
      silverCoin = {
        name: 'Silver Coin',
        position: 'valuable',
        gold: 230,
        rarity: 50
      },
      orbOfChance = {
        name: 'Orb of Chance',
        position: 'valuable',
        gold: 250,
        rarity: 50
      },
      splinterOfUulNetol = {
        name: 'Splinter of Uul-Netol',
        position: 'valuable',
        gold: 300,
        rarity: 45
      },
      orbOfBinding = {
        name: 'Orb of Binding',
        position: 'valuable',
        gold: 330,
        rarity: 55
      },
      orbOfFusing = {
        name: 'Orb of Fusing',
        position: 'valuable',
        gold: 360,
        rarity: 50
      },
      orbOfAlchemy = {
        name: 'Orb of Alchemy',
        position: 'valuable',
        gold: 380,
        rarity: 45
      },
      cartographersChisel = {
        name: 'Cartographer\'s Chisel',
        position: 'valuable',
        gold: 430,
        rarity: 40
      },
      engineersOrb = {
        name: 'Engineer\'s Orb',
        position: 'valuable',
        gold: 450,
        rarity: 35
      },
      orbOfRegret = {
        name: 'Orb of Regret',
        position: 'valuable',
        gold: 770,
        rarity: 25
      },
      gemcuttersPrism = {
        name: 'Gemcutter\'s Prism',
        position: 'valuable',
        gold: 830,
        rarity: 20
      },
      orbOfScouring = {
        name: 'Orb of Scouring',
        position: 'valuable',
        gold: 910,
        rarity: 15
      },
      regalOrb = {
        name: 'Regal Orb',
        position: 'valuable',
        gold: 1000,
        rarity: 10
      },
      chaosOrb = {
        name: 'Chaos Orb',
        position: 'valuable',
        gold: 1000,
        rarity: 10
      },
      orbOfHorizons = {
        name: 'Orb of Horizons',
        position: 'valuable',
        gold: 1000,
        rarity: 10
      },
      vaalOrb = {
        name: 'Vaal Orb',
        position: 'valuable',
        gold: 1400,
        rarity: 10
      },
      splinterOfChayula = {
        name: 'Splinter of Chayula',
        position: 'valuable',
        gold: 1900,
        rarity: 9
      },
      blessingOfXoph = {
        name: 'Blessing of Xoph',
        position: 'valuable',
        gold: 2000,
        rarity: 9
      },
      blessingOfTul = {
        name: 'Blessing of Tul',
        position: 'valuable',
        gold: 3000,
        rarity: 8
      },
      annulmentShard = {
        name: 'Annulment Shard',
        position: 'valuable',
        gold: 3200,
        rarity: 7
      },
      blessingOfUulNetol = {
        name: 'Blessing of Uul-Netol',
        position: 'valuable',
        gold: 6400,
        rarity: 6
      },
      exaltedShard = {
        name: 'Exalted Shard',
        position: 'valuable',
        gold: 7000,
        rarity: 5
      },
      blessingOfEsh = {
        name: 'Blessing of Esh',
        position: 'valuable',
        gold: 7000,
        rarity: 5
      },
      harbingersOrb = {
        name: 'Harbinger\'s Orb',
        position: 'valuable',
        gold: 18000,
        rarity: 4
      },
      divineOrb = {
        name: 'Divine Orb',
        position: 'valuable',
        gold: 19000,
        rarity: 4
      },
      ancientOrb = {
        name: 'Ancient Orb',
        position: 'valuable',
        gold: 38300,
        rarity: 3
      },
      orbOfAnnulment = {
        name: 'Orb of Annulment',
        position: 'valuable',
        gold: 65000,
        rarity: 2
      },
      blessingOfChayula = {
        name: 'Blessing of Chayula',
        position: 'valuable',
        gold: 90000,
        rarity: 1
      },
      exaltedOrb = {
        name: 'Exalted Orb',
        position: 'valuable',
        gold: 148000,
        rarity: 0.1
      },
      mirrorShard = {
        name: 'Mirror Shard',
        position: 'valuable',
        gold: 1200000,
        rarity: 0.05
      },
      mirrorOfKalandra = {
        name: 'Mirror of Kalandra',
        position: 'valuable',
        gold: 27000000,
        rarity: 0.01
      },
    ],
  ],

  skillItems: [
    woodcuttingMats = [
      logs = {
        name: 'Logs',
        source: 'Normal Tree',
        gold: 1,
        level: 1,
        rarity: 90
      },
      oakLogs = {
        name: 'Oak Logs',
        source: 'Oak Tree',
        gold: 10,
        level: 15,
        rarity: 80
      },
      willowLogs = {
        name: 'Willow Logs',
        source: 'Willow Tree',
        gold: 100,
        level: 30,
        rarity: 70
      },
      mapleLogs = {
        name: 'Maple Logs',
        source: 'Maple Tree',
        gold: 250,
        level: 45,
        rarity: 60
      },
      mahoganyLogs = {
        name: 'Mahogany Logs',
        source: 'Mahogany Tree',
        gold: 500,
        level: 50,
        rarity: 50
      },
      yewLogs = {
        name: 'Yew Logs',
        source: 'Yew Tree',
        gold: 750,
        level: 60,
        rarity: 40
      },
      magicLogs = {
        name: 'Magic Logs',
        source: 'Magic Tree',
        gold: 1000,
        level: 75,
        rarity: 30
      },
      elderLogs = {
        name: 'Elder Logs',
        source: 'Elder Tree',
        gold: 2000,
        level: 90,
        rarity: 10
      },
    ],

    miningMats = [
      copper = {
        name: 'Copper Ore',
        source: 'Copper Vein',
        gold: 1,
        level: 1,
        rarity: 90
      },
      tin = {
        name: 'Tin Ore',
        source: 'Tin Vein',
        gold: 1,
        level: 1,
        rarity: 90
      },
      iron = {
        name: 'Iron Ore',
        source: 'Iron Vein',
        gold: 10,
        level: 15,
        rarity: 80
      },
      silver = {
        name: 'Silver Ore',
        source: 'Silver Vein',
        gold: 75,
        level: 20,
        rarity: 75
      },
      coal = {
        name: 'Coal',
        source: 'Coal Vein',
        gold: 100,
        level: 30,
        rarity: 70
      },
      gold = {
        name: 'Gold Ore',
        source: 'Gold Vein',
        gold: 200,
        level: 40,
        rarity: 65
      },
      mithril = {
        name: 'Mithril Ore',
        source: 'Mithril Vein',
        gold: 650,
        level: 55,
        rarity: 45
      },
      adamantite = {
        name: 'Adamantite Ore',
        source: 'Adamantite Vein',
        gold: 850,
        level: 70,
        rarity: 35
      },
      runite = {
        name: 'Runite Ore',
        source: 'Runite Vein',
        gold: 1750,
        level: 85,
        rarity: 15
      },
    ],

    fishingMats = [
      shrimp = {
        name: 'Shrimp',
        source: 'Small Fishing Net',
        gold: 1,
        level: 1,
        rarity: 90
      },
      crayfish = {
        name: 'Crayfish',
        source: 'Crayfish Cage',
        gold: 1,
        level: 1,
        rarity: 90
      },
      sardine = {
        name: 'Sardine',
        source: 'Fishing Bait',
        gold: 5,
        level: 5,
        rarity: 85
      },
      herring = {
        name: 'Herring',
        source: 'Fishing Bait',
        gold: 35,
        level: 10,
        rarity: 80
      },
      anchovies = {
        name: 'Anchovies',
        source: 'Small Fishing Net',
        gold: 50,
        level: 15,
        rarity: 80
      },
      trout = {
        name: 'Trout',
        source: 'Fly Fishing Rod',
        gold: 75,
        level: 20,
        rarity: 75
      },
      pike = {
        name: 'Pike',
        source: 'Fishing Bait',
        gold: 85,
        level: 25,
        rarity: 75
      },
      salmon = {
        name: 'Salmon',
        source: 'Fly Fishing Rod',
        gold: 100,
        level: 30,
        rarity: 70
      },
      tuna = {
        name: 'Tuna',
        source: 'Harpoon',
        gold: 150,
        level: 35,
        rarity: 70
      },
      rainbowFish = {
        name: 'Rainbow Fish',
        source: 'Fly Fishing Rod',
        gold: 500,
        level: 38,
        rarity: 50
      },
      lobster = {
        name: 'Lobster',
        source: 'Lobster Pot',
        gold: 200,
        level: 40,
        rarity: 65
      },
      bass = {
        name: 'Bass',
        source: 'Big Fishing Net',
        gold: 250,
        level: 46,
        rarity: 50
      },
      swordfish = {
        name: 'Swordfish',
        source: 'Harpoon',
        gold: 500,
        level: 50,
        rarity: 50
      },
      shark = {
        name: 'Shark',
        source: 'Harpoon',
        gold: 1000,
        level: 76,
        rarity: 30
      },
      greatWhiteShark = {
        name: 'Great White Shark',
        source: 'Harpoon',
        gold: 1750,
        level: 90,
        rarity: 15
      },
    ],

    herbalismMats = [
      peacebloom = {
        name: 'Peacebloom',
        gold: 1,
        level: 1,
        rarity: 90
      },
      silverleaf = {
        name: 'Silverleaf',
        gold: 1,
        level: 1,
        rarity: 90
      },
      earthroot = {
        name: 'Earthroot',
        gold: 5,
        level: 5,
        rarity: 85
      },
      mageroyal = {
        name: 'Mageroyal',
        gold: 35,
        level: 10,
        rarity: 80
      },
      briarthorn = {
        name: 'Briarthorn',
        gold: 50,
        level: 15,
        rarity: 80
      },
      bruiseweed = {
        name: 'Bruiseweed',
        gold: 75,
        level: 20,
        rarity: 75
      },
      kingsblood = {
        name: 'Kingsblood',
        gold: 85,
        level: 25,
        rarity: 75
      },
      fadeleaf = {
        name: 'Fadeleaf',
        gold: 100,
        level: 30,
        rarity: 70
      },
      khadgarsWhisker = {
        name: 'Khadgar\'s Whisker',
        gold: 150,
        level: 35,
        rarity: 70
      },
      goldthorn = {
        name: 'Goldthorn',
        gold: 500,
        level: 38,
        rarity: 50
      },
      sungrass = {
        name: 'Sungrass',
        gold: 200,
        level: 40,
        rarity: 65
      },
      foxflower = {
        name: 'Foxflower',
        gold: 250,
        level: 46,
        rarity: 50
      },
      starlightRose = {
        name: 'Starlight Rose',
        gold: 500,
        level: 50,
        rarity: 50
      },
      wintersKiss = {
        name: 'Winter\'s Kiss',
        gold: 1000,
        level: 76,
        rarity: 30
      },
      firethorn = {
        name: 'Firethorn',
        gold: 1750,
        level: 90,
        rarity: 15
      },
    ],

    battlePets = [
      abyssalEel = {
        name: 'Abyssal Eel',
        family: 'Aquatic',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      abyssius = {
        name: 'Abyssius',
        family: 'Magic',
        power: 1.5,
        health: 50,
        rarity: 50,
      },
      accursedHexxer = {
        name: 'Accursed Hexxer',
        family: 'Magic',
        power: 1.5,
        health: 50,
        rarity: 50,
      },
      adder = {
        name: 'Adder',
        family: 'Beast',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      agelessBronzeDrake = {
        name: 'Ageless Bronze Drake',
        family: 'Dragonkin',
        power: 1.5,
        health: 50,
        rarity: 50,
      },
      alarmOBot = {
        name: 'Alarm-o-Bot',
        family: 'Mechanical',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      alarmODog = {
        name: 'Alarm-o-Dog',
        family: 'Mechanical',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      albatrossChick = {
        name: 'Albatross Chick',
        family: 'Flying',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      albatrossHatchling = {
        name: 'Albatross Hatchling',
        family: 'Flying',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      albinoBuzzard = {
        name: 'Albino Buzzard',
        family: 'Flying',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      albinoChimaeraling = {
        name: 'Albino Chimaeraling',
        family: 'Dragonkin',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      albinoDuskwatcher = {
        name: 'Albino Duskwatcher',
        family: 'Flying',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      albinoRiverCalf = {
        name: 'Albino River Calf',
        family: 'Beast',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      albinoSnake = {
        name: 'Albino Snake',
        family: 'Beast',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      aldrusianSproutling = {
        name: 'Aldrusian Sproutling',
        family: 'Elemental',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      alpineChipmunk = {
        name: 'Alpine Chipmunk',
        family: 'Critter',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      alpineFoxling = {
        name: 'Alpine Foxling',
        family: 'Beast',
        power: 0.5,
        health: 10,
        rarity: 90,
      },
      alpineHare = {
        name: 'Alpine Hare',
        family: 'Critter',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      amalgamOfDestruction = {
        name: 'Amalgam of Destruction',
        family: 'Elemental',
        power: 2.5,
        health: 100,
        rarity: 25,
      },
      amberMoth = {
        name: 'Amber Moth',
        family: 'Flying',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      amberbarbWasp = {
        name: 'Amberbarb Wasp',
        family: 'Flying',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      amberglowStinger = {
        name: 'Amberglow Stinger',
        family: 'Flying',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      amethystShaleHatchling = {
        name: 'Amethyst Shale Hatchling',
        family: 'Elemental',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      amethystSpiderling = {
        name: 'Amethyst Spiderling',
        family: 'Beast',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      ammenValeLashling = {
        name: 'Ammen Vale Lashling',
        family: 'Elemental',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      ancientNestGuardian = {
        name: 'Ancient Nest Guardian',
        family: 'Mechanical',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      anconaChicken = {
        name: 'Ancona Chicken',
        family: 'Flying',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      antoranBileLarva = {
        name: 'Antoran Bile Larva',
        family: 'Beast',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      anubisathIdol = {
        name: 'Anubisath Idol',
        family: 'Humanoid',
        power: 2.5,
        health: 100,
        rarity: 25,
      },
      aquaStrider = {
        name: 'Aqua Strider',
        family: 'Aquatic',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      arcaneEye = {
        name: 'Arcane Eye',
        family: 'Magic',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      arcaneGorger = {
        name: 'Arcane Gorger',
        family: 'Magic',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      arcticFox = {
        name: 'Arctic Fox',
        family: 'Beast',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      arcticHare = {
        name: 'Arctic Hare',
        family: 'Critter',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      armadilloPup = {
        name: 'Armadillo Pup',
        family: 'Critter',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      ashLizard = {
        name: 'Ash Lizard',
        family: 'Beast',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      ashSpiderling = {
        name: 'Ash Spiderling',
        family: 'Beast',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      ashViper = {
        name: 'Ash Viper',
        family: 'Beast',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      ashmawCub = {
        name: 'Ashmaw Cub',
        family: 'Beast',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      ashwingMoth = {
        name: 'Ashwing Moth',
        family: 'Flying',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      auburnRingtail = {
        name: 'Auburn Ringtail',
        family: 'Critter',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      azureWhelpling = {
        name: 'Azure Whelpling',
        family: 'Dragonkin',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      azureWindseeker = {
        name: 'Azure Windseeker',
        family: 'Dragonkin',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      babyApe = {
        name: 'Baby Ape',
        family: 'Beast',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      babyBlizzardBear = {
        name: 'Baby Blizzard Bear',
        family: 'Beast',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      babyCrawg = {
        name: 'Baby Crawg',
        family: 'Beast',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      barnacledHermitCrab = {
        name: 'Barnacled Hermit Crab',
        family: 'Aquatic',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      bat = {
        name: 'Bat',
        family: 'Flying',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      beetle = {
        name: 'Beetle',
        family: 'Critter',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      biletoad = {
        name: 'Biletoad',
        family: 'Aquatic',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      blackKingsnake = {
        name: 'Black Kingsnake',
        family: 'Beast',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      blackfuseBombling = {
        name: 'Blackfuse Bombling',
        family: 'Mechanical',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      blazehound = {
        name: 'Blazehound',
        family: 'Elemental',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      blazingCindercrawler = {
        name: 'Blazing Cindercrawler',
        family: 'Elemental',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      blazingFirehawk = {
        name: 'Blazing Firehawk',
        family: 'Flying',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      bleakwaterJelly = {
        name: 'Bleakwater Jelly',
        family: 'Aquatic',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      blightedSquirrel = {
        name: 'Blighted Squirrel',
        family: 'Undead',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      blighthawk = {
        name: 'Blighthawk',
        family: 'Undead',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      blindRat = {
        name: 'Blind Rat',
        family: 'Critter',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      blueClockworkRocketBot = {
        name: 'Blue Clockwork Rocket Bot',
        family: 'Mechanical',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      calicoCat = {
        name: 'Calico Cat',
        family: 'Beast',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      carrionRat = {
        name: 'Carrion Rat',
        family: 'Critter',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      celestialCalf = {
        name: 'Celestial Calf',
        family: 'Magic',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      celestialDragon = {
        name: 'Celestial Dragon',
        family: 'Dragonkin',
        power: 1.5,
        health: 50,
        rarity: 50,
      },
      cenarionHatchling = {
        name: 'Cenarion Hatchling',
        family: 'Flying',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      chaosPup = {
        name: 'Chaos Pup',
        family: 'Magic',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      cheetahCub = {
        name: 'Cheetah Cub',
        family: 'Beast',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      chicken = {
        name: 'Chicken',
        family: 'Flying',
        power: 0.25,
        health: 5,
        rarity: 100,
      },
      cinderKitten = {
        name: 'Cinder Kitten',
        family: 'Elemental',
        power: 1.5,
        health: 50,
        rarity: 50,
      },
      cockroach = {
        name: 'Cockroach',
        family: 'Critter',
        power: 0.25,
        health: 20,
        rarity: 100,
      },
      darkPhoenixHatchling = {
        name: 'Dark Phoenix Hatchling',
        family: 'Elemental',
        power: 1.5,
        health: 50,
        rarity: 50,
      },
      darkWhelpling = {
        name: 'Dark Whelpling',
        family: 'Dragonkin',
        power: 0.75,
        health: 25,
        rarity: 75,
      },
      dungBeetle = {
        name: 'Dung Beetle',
        family: 'Critter',
        power: 0.25,
        health: 20,
        rarity: 100,
      },
    ],
  ],
};
module.exports = items;
