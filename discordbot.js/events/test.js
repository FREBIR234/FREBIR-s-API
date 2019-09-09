const { Event } = require('klasa');

module.exports = class extends Event {

    constructor(...args) {
        super(...args, { name:'channelUpdate', enabled: true });
    }

    async run(oldChannel, newChannel) {
        delete require.cache[require.resolve(`../channels.json`)];
        const reputation = require("../channels.json");
        const fs = require("fs");
        if (reputation.users === '100') {return}
        if (reputation.users === '96') {return}
        if (!reputation[oldChannel.id]) {return}
        if (oldChannel.parentID === '603520208514318348')
        if (newChannel.userLimit != oldChannel.userLimit)
        oldChannel.guild.channels.get(oldChannel.id).setUserLimit(reputation[oldChannel.id].users)
        
        // This is where you place the code you want to run for your event
    }

    async init() {
        // You can optionally define this method which will be run when the bot starts (after login, so discord data is available via this.client)
    }

};
