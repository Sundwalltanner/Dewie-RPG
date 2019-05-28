const { CronJob } = require('cron');

class Crons {

  constructor(params) {
    const { Discord } = params;
    this.Discord = Discord;
    this.powerHourWarnTime = '00 30 13 * * 0-6';    // 1:30pm every day
    this.dailyLotteryTime = '00 00 10 * * 0-6';     // 10am every day
    this.blizzardRandomTime = '00 00 9 * * 0-6';    // 9am every day
    this.leadboardUpdateTime = '00 */10 * * * 0-6'; // Once every 6 minutes
    this.timeZone = 'America/Los_Angeles';          // PDT
  }

  loadCrons() {
    new CronJob({
      cronTime: this.powerHourWarnTime,
      onTick: () => {
        this.Discord.powerHourBegin();
      },
      start: false,
      timeZone: this.timeZone,
      runOnInit: false
    }).start();

    new CronJob({
      cronTime: this.dailyLotteryTime,
      onTick: () => {
        this.Discord.dailyLottery();
      },
      start: false,
      timeZone: this.timeZone,
      runOnInit: false
    }).start();

    new CronJob({
      cronTime: this.blizzardRandomTime,
      onTick: () => {
        this.Discord.blizzardRandom();
      },
      start: false,
      timeZone: this.timeZone,
      runOnInit: false
    }).start();

    new CronJob({
      cronTime: this.leadboardUpdateTime,
      onTick: () => {
        this.Discord.updateLeaderboards();
      },
      start: false,
      timeZone: this.timeZone,
      runOnInit: false
    }).start();
  }

}
module.exports = Crons;
