const messages = {
  /**
   * $$ -> map name
   * ## -> selectedPlayer name
   * @@ -> selectedPlayer gender him
   * ^^ -> selectedPlayer gender his
   * && -> seletecdPlayer gender he
   * %% -> item name
   * !! -> victimPlayer name
   * 
   * Specific events:
   *    gamble:
   *      $& = luckGambleGold
   * TODO: Need moar messages!
   */
  event: {
    camp: [{
      eventMsg: '[\`$$\`] ## has set up camp and begun resting.',
      eventLog: 'Set up camp to rest'
    },
    {
      eventMsg: '[\`$$\`] ## has begun resting safely inside an abandoned hut.',
      eventLog: 'Rested inside an abandoned hut'
    },
    {
      eventMsg: '[\`$$\`] ## decided to take a break and hunt for some food.',
      eventLog: 'Hunted for food around $$'
    },
    {
      eventMsg: '[\`$$\`] ## went foraging for ingredients to make medicine for ^^ wounds.',
      eventLog: 'Foraged for ingredients to make medicine for your wounds'
    },
    {
      eventMsg: '[\`$$\`] ## has decided to rest ^^ head on a rock for a while.',
      eventLog: 'Rested your head on a rock'
    },
    {
      eventMsg: '[\`$$\`] ## just noticed it\'s time for second breakfast and a break.',
      eventLog: 'Noticed it was time for second breakfast and a break'
    },
    {
      eventMsg: '[\`$$\`] ## ate some mushrooms and gazed upon ape-faced mountain all night.',
      eventLog: 'Took shrooms'
    },
    {
      eventMsg: '[\`$$\`] ## just noticed there\'s still plenty of meat on that bone. && decided to take it home, throw it in a pot, add some broth, a potato. Baby, you\'ve got a stew going.',
      eventLog: 'Made some stew'
    }
    ],

    gamble: {
      win: [{
        eventMsg: `[\`$$\`] ## decided to try ^^ luck in cryptocurrency.
    Fortunately, && earned $& gold!`,
        eventLog: 'Congrats! You won $& gold by investing in cryptocurrency.'
      },
      {
        eventMsg: `[\`$$\`] ## decided to try ^^ luck in a tavern.
    Fortunately, && won $& gold!`,
        eventLog: 'Congrats! You won $& gold by gambling in a tavern.'
      }],

      lose: [{
        eventMsg: `[\`$$\`] ## decided to try ^^ luck in cryptocurrency.
    Unfortunately, && lost $& gold!`,
        eventLog: 'Oh dear! You lost $& gold by investing in cryptocurrency.'
      },
      {
        eventMsg: `[\`$$\`] ## decided to try ^^ luck in a tavern.
    Unfortunately, && lost $& gold!`,
        eventLog: 'Oh dear! You lost $& gold by gambling in a tavern.'
      }]
    },

    item: [{
      eventMsg: '[\`$$\`] ## finds a chest containing \`%%\`!',
      eventLog: 'Found a chest containing %% in $$'
    },
    {
      eventMsg: '[\`$$\`] ## finds \`%%\` on the ground!',
      eventLog: 'Found %% on the ground in $$'
    },
    {
      eventMsg: '[\`$$\`] ## explores an abandoned hut and finds \`%%\` inside!',
      eventLog: 'Explored an abandoned hut in $$ which had %% inside'
    },
    {
      eventMsg: '[\`$$\`] ## a bird just dropped \`%%\` in front of @@!',
      eventLog: 'A bird just dropped %% infront of you in $$'
    },
    {
      eventMsg: '[\`$$\`] ## stumbles upon a grizzly scene. One of the corpses has \`%%\` next to it! Seems like it is in good enough condition to use.',
      eventLog: 'You found %% on a corpse in $$'
    },
    {
      eventMsg: '[\`$$\`] ## finds an altar. \`%%\` is sitting on the center, ready to be used!',
      eventLog: 'On an altar in $$ you found %%'
    },
    {
      eventMsg: '[\`$$\`] ## catches a glint out of the corner of ^^ eye. Brushing aside some leaves ## finds \`%%\` left here by the last person to camp at this spot.',
      eventLog: 'Near your camp in $$ there was %%'
    },
    {
      eventMsg: '[\`$$\`] ## notices something reflecting inside a nearby cave. Exploring it further && found \`%%\` resting against a wall.',
      eventLog: 'While exploring a cave in $$ you found %%'
    },
    {
      eventMsg: '[\`$$\`] ## finds a grave with \`%%\` sitting on it. The dead do not need equipment so it\'s yours for the taking. You probably won\'t regret that.',
      eventLog: 'You stole %% from a grave in $$'
    },
    {
      eventMsg: '[\`$$\`] ## looks around a derelict building and finds \`%%\` in one of the corners.',
      eventLog: 'Found %% while looking around a derelict building in $$'
    },
    {
      eventMsg: '[\`$$\`] ## discovers a Honda Civic and searches through the trunk. Inside && found some poker chips and \`%%\`!',
      eventLog: 'Found a Honda Civic containing %% in $$'
    },
    {
      eventMsg: '[\`$$\`] ## thanks the bus driver and is given \`%%\` in return!',
      eventLog: 'Was given %% by the bus driver in $$'
    },
    {
      eventMsg: '[\`$$\`] ## thinks && saw a moon, but it\'s just \`%%\`...',
      eventLog: 'Thought %% by the bus driver in $$'
    }],

    death: [{
      eventMsg: 'Game over man... Game over.',
      eventLog: 'Game over'
    },
    {
      eventMsg: 'RIP.',
      eventLog: 'RIP'
    },
    {
      eventMsg: 'Have a nice death!',
      eventLog: 'Have a nice death'
    },
    {
      eventMsg: 'That\'s gotta hurt!',
      eventLog: 'Ouch'
    },
    {
      eventMsg: 'Try to not do that again.',
      eventLog: 'Try to not do that again'
    },
    {
      eventMsg: 'Your body was eaten by vultures and imported cannibals.',
      eventLog: 'Your body was eaten by vultures and imported cannibals'
    },
    {
      eventMsg: 'Oh no! Not again!',
      eventLog: 'Oh no not again'
    },
    {
      eventMsg: 'You suck.',
      eventLog: 'You suck'
    },
    {
      eventMsg: 'By the power of Dewie, you will be reborn.',
      eventLog: 'By the power of Dewie, you will be reborn'
    },
    {
      eventMsg: 'You\'ll never get that dub now!',
      eventLog: 'No dub'
    },
    {
      eventMsg: 'Congratulations!',
      eventLog: 'Congrats'
    },
    {
      eventMsg: 'Sadly, no trace of you was ever found.',
      eventLog: 'Sadly, no trace of you was ever found'
    },
    {
      eventMsg: 'Great... Another trip to the Mortuary.',
      eventLog: 'Great... Another trip to the Mortuary'
    },
    {
      eventMsg: 'Thanks Obama!',
      eventLog: 'Thanks Obama'
    },
    {
      eventMsg: 'YOU DIED.',
      eventLog: 'YOU DIED'
    },
    {
      eventMsg: 'Snake! Peace Walker has launched the nuke! It\s all over.',
      eventLog: 'Snake! Peace Walker has launched the nuke! It\s all over'
    },
    {
      eventMsg: 'Snake! You can\'t do that! The future will be changed! You\'ll create a time paradox!',
      eventLog: 'Snake! You can\'t do that! The future will be changed! You\'ll create a time paradox'
    }]
  }
};
module.exports = messages;