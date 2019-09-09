const { Event } = require('klasa');
const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = class extends Event {

    constructor(...args) {
        super(...args, { name:'koniec', enabled: true });
    }

    async run() {

        
        // This is where you place the code you want to run for your event
    }

    async init() {
        this.client
        let guild2 = this.client.guilds.get('595658884635426836')
        let category = guild2.channels.find(c => c.id == "603520208514318348" && c.type == "category");
        if (!category) throw new Error("Category channel does not exist");
    }

};