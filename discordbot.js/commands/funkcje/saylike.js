process.title = 'Fredbout Beta'
const webhook = require("webhook-discord")
const Enmap = require('enmap');


const fetch = require('node-fetch');
const hastebin = require("hastebin-gen");
const config = require('../../config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'saylike',
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
            throttling: {
                usages: 1,
                duration: 100
            },
            extendedHelp: 'No extended help available.'
        });
    }
    async run(message, [...params]) {
      
        let targetUser = message.guild.member(message.mentions.users.first())
        const args = message.content.slice('!').trim().split(/ +/g);
        let text = args.slice(2).join(" ");
        message.delete()

        message.channel.createWebhook(targetUser.user.username, targetUser.user.avatarURL,`${message.author.nickname} ${message.author.tag}`)
        .then(webhook => webhook.send(text) && webhook.delete())



        }}
