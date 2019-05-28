const { infoLog, actionLog, moveLog } = require('../../utils/logger');
const enumHelper = require('../../utils/enumHelper');

class Discord {

  constructor(bot) {
    this.bot = bot;
  }

  loadGuilds() {
    console.log('Dewie RPG is loading guilds');
    this.bot.guilds.forEach(async (guild) => {
      this.manageGuildChannels(guild);
    });
  }

  async manageGuildChannels(guild) {
    const botGuildMember = await guild.members.find(member => member.id === this.bot.user.id);
    if (!botGuildMember.permissions.has('MANAGE_CHANNELS')) {
      return;
    }
    const hasCategoryChannel = await guild.channels.find(channel => channel.type === 'category' && channel.name === 'Dewie-RPG');
    const hasLeaderboardsChannel = await guild.channels.find(channel => channel.name === 'leaderboards' && channel.type === 'text' && channel.parent && channel.parent.name === 'Dewie-RPG');
    const hasCommandsChannel = await guild.channels.find(channel => channel.name === 'commands' && channel.type === 'text' && channel.parent && channel.parent.name === 'Dewie-RPG');
    const hasLotteryChannel = await guild.channels.find(channel => channel.name === 'lottery' && channel.type === 'text' && channel.parent && channel.parent.name === 'Dewie-RPG');
    const hasFAQChannel = await guild.channels.find(channel => channel.name === 'faq' && channel.type === 'text' && channel.parent && channel.parent.name === 'Dewie-RPG');
    const hasActionsChannel = await guild.channels.find(channel => channel.name === 'actions' && channel.type === 'text' && channel.parent && channel.parent.name === 'Dewie-RPG');
    const hasMovementChannel = await guild.channels.find(channel => channel.name === 'movement' && channel.type === 'text' && channel.parent && channel.parent.name === 'Dewie-RPG');
    if (!hasCategoryChannel) {
      console.log(`Creating Dewie-RPG Category Channel for Guild: ${guild.name}`);
      infoLog.info(`Creating Dewie-RPG Category Channel for Guild: ${guild.name}`);
      try {
        await guild.createChannel('Dewie-RPG', 'category', {}, 'Creating channels for Dewie-RPG-Bot');
      } catch (err) {
        console.log(err);
      }
    }
    if (!hasLeaderboardsChannel) {
      console.log(`Creating Dewie-RPG Leaderboards Channel for Guild: ${guild.name}`);
      try {
        const leaderboardsChannel = await guild.createChannel('leaderboards', 'text', [{
          id: guild.id,
          deny: ['SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'ATTACH_FILES', 'MENTION_EVERYONE', 'ADD_REACTIONS'],
          allow: []
        },
        {
          id: this.bot.user.id,
          deny: ['SEND_TTS_MESSAGES', 'ATTACH_FILES', 'MENTION_EVERYONE', 'ADD_REACTIONS'],
          allow: ['SEND_MESSAGES', 'MANAGE_MESSAGES']
        }], 'Creating channels for Dewie-RPG-Bot');
        await leaderboardsChannel.setParent(guild.channels.find(channel => channel.type === 'category' && channel.name === 'Dewie-RPG'));
      } catch (err) {
        console.log(err);
      }
    }
    if (!hasCommandsChannel) {
      console.log(`Creating Dewie-RPG Commands Channel for Guild: ${guild.name}`);
      infoLog.info(`Creating Dewie-RPG Commands Channel for Guild: ${guild.name}`);
      try {
        const commandsChannel = await guild.createChannel('commands', 'text', [{
          id: guild.id,
          deny: ['SEND_TTS_MESSAGES', 'ATTACH_FILES', 'MENTION_EVERYONE'],
          allow: ['SEND_MESSAGES', 'ADD_REACTIONS']
        }], 'Creating channels for Dewie-RPG-Bot');
        await commandsChannel.setParent(guild.channels.find(channel => channel.type === 'category' && channel.name === 'Dewie-RPG'));
        await commandsChannel.setTopic('In order to easier check other players stats/equip, a command channel was created. You can check others with @mentions.', 'Setting up Dewie-RPG Channels');
      } catch (err) {
        console.log(err);
      }
    }
    if (!hasLotteryChannel) {
      console.log(`Creating Dewie-RPG Lottery Channel for Guild: ${guild.name}`);
      infoLog.info(`Creating Dewie-RPG Lottery Channel for Guild: ${guild.name}`);
      try {
        const commandsChannel = await guild.createChannel('lottery', 'text', [{
          id: guild.id,
          deny: ['SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'ATTACH_FILES', 'MENTION_EVERYONE', 'ADD_REACTIONS'],
        }], 'Creating channels for Dewie-RPG-Bot');
        await commandsChannel.setParent(guild.channels.find(channel => channel.type === 'category' && channel.name === 'Dewie-RPG'));
        await commandsChannel.setTopic('The daily lottery', 'Setting up Dewie-RPG Channels');
      } catch (err) {
        console.log(err);
      }
    }
    if (!hasFAQChannel) {
      console.log(`Creating Dewie-RPG FAQ Channel for Guild: ${guild.name}`);
      infoLog.info(`Creating Dewie-RPG FAQ Channel for Guild: ${guild.name}`);
      try {
        const faqChannel = await guild.createChannel('faq', 'text', [{
          id: guild.id,
          deny: ['SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'ATTACH_FILES', 'MENTION_EVERYONE', 'ADD_REACTIONS'],
          allow: []
        },
        {
          id: this.bot.user.id,
          deny: ['SEND_TTS_MESSAGES', 'ATTACH_FILES', 'MENTION_EVERYONE'],
          allow: ['SEND_MESSAGES', 'MANAGE_MESSAGES']
        }], 'Creating channels for Dewie-RPG-Bot');
        await faqChannel.setParent(guild.channels.find(channel => channel.type === 'category' && channel.name === 'Dewie-RPG'));
        await faqChannel.setTopic('Frequently asked questions', 'Setting up Dewie-RPG Channels');
        // TODO move FAQ message somewhere else so I dont have to look everywhere to update these messages
        await faqChannel.send(`
• **I'm not born yet, what should I do?**
Join any voice channel but the AFK channel, and sit in there for at least 30 seconds.

• **How do I play?**
As long as you're in any voice channel but the AFK channel, you will be playing the game.

• **Will my character be reset?**
Probably.

• **How can I help with the development?**
You can't. Fuck off.

• **My event counter goes up but I did not see anything in the event channels**
There are some events such as luck events which fail. When they do it does not print anything but your event counter goes up.

• **Is there a way to turn off all the spam from events?**
Yes, you can right click the channel to mute and select the mute checkbox.

• **Can I control my character?**
No. But you can do something like enter the command !lottery once every day to have a shot at winning a large amount of money. It costs 100 gold to enter the lottery, and the winner is revealed at 10AM (Pacific) every day.

• **My character was killed by another player while I wasn't playing!**
That sucks.

• **When is the Power Hour and what is it?**
Power Hour starts at 2:00PM (Pacific) every day and increases the global multiplier by 1.

• **What's the command prefix for this bot?**
The prefix is ! (eg: !help).`);
      } catch (err) {
        console.log(err);
      }
    }
    if (!hasActionsChannel) {
      console.log(`Creating Dewie-RPG Action Channel for Guild: ${guild.name}`);
      infoLog.info(`Creating Dewie-RPG Action Channel for Guild: ${guild.name}`);
      try {
        const actionChannel = await guild.createChannel('actions', 'text', [{
          id: guild.id,
          deny: ['SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'ATTACH_FILES', 'MENTION_EVERYONE'],
          allow: ['ADD_REACTIONS']
        },
        {
          id: this.bot.user.id,
          deny: ['SEND_TTS_MESSAGES', 'ATTACH_FILES', 'MENTION_EVERYONE', 'ADD_REACTIONS'],
          allow: ['SEND_MESSAGES']
        }], 'Creating channels for Dewie-RPG-Bot');
        await actionChannel.setParent(guild.channels.find(channel => channel.type === 'category' && channel.name === 'Dewie-RPG'));
        await actionChannel.setTopic('Muting this channel is recommended in order to not get spammed.', 'Setting up Dewie-RPG Channels');
      } catch (err) {
        console.log(err);
      }
    }
    if (!hasMovementChannel) {
      console.log(`Creating Dewie-RPG Movement Channel for Guild: ${guild.name}`);
      infoLog.info(`Creating Dewie-RPG Movement Channel for Guild: ${guild.name}`);
      try {
        const movementChannel = await guild.createChannel('movement', 'text', [{
          id: guild.id,
          deny: ['SEND_MESSAGES', 'SEND_TTS_MESSAGES', 'ATTACH_FILES', 'MENTION_EVERYONE'],
          allow: ['ADD_REACTIONS']
        },
        {
          id: this.bot.user.id,
          deny: ['SEND_TTS_MESSAGES', 'ATTACH_FILES', 'MENTION_EVERYONE', 'ADD_REACTIONS'],
          allow: ['SEND_MESSAGES']
        }], 'Creating channels for Dewie-RPG-Bot');
        await movementChannel.setParent(guild.channels.find(channel => channel.type === 'category' && channel.name === 'Dewie-RPG'));
        await movementChannel.setTopic('Muting this channel is recommended in order to not get spammed.', 'Setting up Dewie-RPG Channels');
      } catch (err) {
        console.log(err);
      }
    }
  }

  getOnlinePlayers(guild) {
    return guild.members
      .filter(member => !member.presence.status.includes('offline') && !member.user.bot && member.id !== this.bot.user.id)
      .map(member => Object.assign({}, {
        discordId: member.id,
        name: member.nickname ? member.nickname : member.displayName,
        guildId: guild.id
      }));
  }

  getOfflinePlayers(guild) {
    return guild.members
      .filter(member => member.presence.status.includes('offline') && !member.user.bot && member.id !== this.bot.user.id)
      .map(member => Object.assign({}, {
        discordId: member.id,
        name: member.nickname ? member.nickname : member.displayName,
        guildId: guild.id
      }));
  }

  getMembers(guild) {
    const guildOnlineMembers = [];
    const guildOfflineMembers = [];
    guild.members.forEach((member) => {
      if (!member.user.bot && member.id !== this.bot.user.id) {
        const player = Object.assign({}, {
          discordId: member.id,
          name: member.nickname ? member.nickname : member.displayName,
          guildId: guild.id
        });
        if (member.presence.status.includes('offline')) {
          guildOfflineMembers.push(player);
        } else {
          guildOnlineMembers.push(player);
        }
      }
    });
    return { guildOnlineMembers, guildOfflineMembers };
  }

  async sendMessage(guild, result) {
    try {
      if (!result || result && !result.msg || result && !result.pm) {
        return;
      }
      const message = result.msg.join('\n');
      const privateMessage = result.pm.join('\n');

      switch (result.type) {
        case 'actions':
          actionLog.info(message);
          break;
        case 'movement':
          moveLog.info(message);
          break;
      }
      // TODO add check to parent once you find out why its still null
      const channelToSend = await guild.channels.find(channel => channel.name === result.type && channel.type === 'text' /*&& channel.parent.name === 'Dewie-RPG'*/);
      if (channelToSend) {
        await channelToSend.send(message, { split: true });
      }
      if (result.updatedPlayer.isPrivateMessage === enumHelper.pmMode.on
        || (result.updatedPlayer.isPrivateMessage === enumHelper.pmMode.filtered
          && result.type === 'actions')) {
        const guildMember = await guild.members.find(member => member.id === result.updatedPlayer.discordId);
        await guildMember.send(privateMessage, { split: true });
      }
      // Usually used for PVP messages to message player that got attacked that is not owner of event
      if (result.attackerObj
        && (result.attackerObj.isPrivateMessage === enumHelper.pmMode.on || result.attackerObj.isPrivateMessage === enumHelper.pmMode.filtered)
        && result.otherPlayerPmMsg) {
        const otherPlayerPrivateMessage = result.otherPlayerPmMsg.join('\n');
        const guildMember = await guild.members.find(member => member.id === result.attackerObj.discordId);
        await guildMember.send(otherPlayerPrivateMessage, { split: true });
      }
    } catch (err) {
      infoLog.info(err);
    }
  }

}
module.exports = Discord;
