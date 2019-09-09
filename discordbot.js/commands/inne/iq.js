const fetch = require('node-fetch');
const hastebin = require("hastebin-gen");
const config = require('../../config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'iq',
            enabled: true,
            runIn: ['text', 'dm'],
            cooldown: 0,
            aliases: [],
            permLevel: 0,
            botPerms: [],
            requiredSettings: [],
            description: '',
            quotedStringSupport: false,
            usage: '',
            usageDelim: undefined,
            extendedHelp: 'No extended help available.'
        });
    }
    async run(message, [...params]) {

            let emb = new Discord.RichEmbed()
            emb.addField(":bulb: Poziom Inteligencji", "Masz **" + Math.floor(Math.random() * 200) + "** iq.")
            emb.setColor(0x7289da);
            message.channel.send(emb);
        

        
    }
}
