<div align="center">
  <br />
  <p>
    <a href="https://github.com/Sundwalltanner/Dewie-RPG/blob/master/LICENSE"><img src="https://img.shields.io/packagist/l/doctrine/orm.svg" alt="MIT Liscense" /></a>
  </p>
</div>

# Dewie-RPG-Bot
An Idle-RPG bot for Discord created using node.js with the [discord.js](https://github.com/discordjs) framework.
This is a heavily modified version of [sizzlorox](https://github.com/sizzlorox)'s [Idle-RPG-Bot](https://github.com/sizzlorox/Idle-RPG-Bot).

# How is it different?
[sizzlorox](https://github.com/sizzlorox) has created an incredible bot, but I wanted to add more to it.
* A player is now only considered to be active in the game when they are in any voice channel but the AFK channel. A player can still be killed by another player even if they're not considered active though.
* Additional equipment slots. Equipment slots now include: Helmet, **Body Armour**, **Gloves**, **Belt**, Weapon, **Amulet**, **2 Rings**, and Relic.
* Droppable valuables. Instead of health potions existing under a category of *items*, they now exist under *consumables*, while valuables have their own category.
* Additional loot all around. New equipment names, new flavor text, new everything.
* Skills. On top of random events including combat, finding loot, camping to regenerate health, selling loot, and buying loot, you now have a chance at a skill-related event like chopping down a tree or fishing in order to level that skill up, and acquire even more valuable skill-related materials based on that skill's level. Skill-related materials are automatically sold in town. Skills include: **Mining**, **Fishing**, **Woodcutting**, and **Herbalism**.
* A lot of other things have changed and will continue to change as I find time to change them.

# What else is going to change?
There's a lot of things I'd like to add to this, but my free time is rather limited. Hopefully when I do find time, I can add these and then some.
* A better gold sink than spam-casting bless.
* Crafting to go along with all the gathering skills.
* More consumable items: more potions with various buffs/debuffs, cooking in order to create consumables, etc...
* More!

# Setup
Create a .env file in the project root directory with these env variables: (Without < >)
```
DISCORD_BOT_LOGIN_TOKEN=<Bot login token>
DISCORD_BOT_OPERATORS_ID=<Comma seperated list of Bot Operator ID's>
Example:
DISCORD_BOT_OPERATORS_ID=123456789
DISCORD_BOT_OPERATORS_ID=123456789, 987654321

MIN_TIMER=<ex. 0.5>
MAX_TIMER=<ex. 1>
HEARTBEAT_TIMER=<ex. 0.5>

MONGODB_URI=<MongoDB Connection URI>

Optional Test Variables:
TEST_DISCORD_BOT_LOGIN_TOKEN=
TEST_MIN_TIMER=
TEST_MAX_TIMER=
TEST_HEARTBEAT_TIMER=
```

# Requirements
```
nodejs
mongodb
```

# Installation
```
npm install
npm run start
(if on windows)
npm run start:windows
```