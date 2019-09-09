const fetch = require('node-fetch');
const hastebin = require("hastebin-gen");
const config = require('../../config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'hastebin',
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
        const args = message.content.slice('!').trim().split(/ +/g);
        let text = args.slice(1).join(" ");
        const haste = await hastebin(`${text}`, { url: config.hasteurl, extension: "json" });
        console.log(haste);
        message.channel.sendMessage(`${haste}`);
        let request = require('request');

        
    }
}
