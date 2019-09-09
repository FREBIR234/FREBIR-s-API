const fetch = require('node-fetch');
const hastebin = require("hastebin-gen");
const config = require('../../config.json');
const Discord = require('discord.js');
const bot = new Discord.Client();
const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'powiększ',
            enabled: true,
            runIn: ['text', 'dm'],
            cooldown: 0,
            aliases: [''],
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
        delete require.cache[require.resolve(`../../channels.json`)];
        const channels = require("../../channels.json");
        if (channels.users <= 100) {return}

        const fs = require("fs");
        const args = message.content.slice('>').trim().split(/ +/g);
        let rola = message.guild.roles.find("name", "legit")
        if(!message.member.roles.has(rola.id)){
            message.channel.send(`Najpierw musisz zakupić Powiększenia Kanału w sklepie serwerowym (!shop)!`)
            return;
        }
        if (!channels[message.author.id]) {
        message.channel.send('By kupić powiększenie kanału prywatnego, musisz go posiadać')
        return;
        }
        let channels3 = channels[message.author.id].channel 
        let users = channels[message.author.id].users 


        let NewUserLimit = users + 4
        if (NewUserLimit === 100) {message.guild.channels.find("id", channels[message.author.id].channel).setUserLimit(0)}
        else {message.guild.channels.find("id", channels[message.author.id].channel).setUserLimit(NewUserLimit)}
        channels[message.author.id].users = channels[message.author.id].users + 4;
        channels[channels3].users = channels[channels3].users + 4;

    fs.writeFile("channels.json", JSON.stringify(channels), (err) => {
        if (err) {
            console.log(err);
        }
    });
 

    }
}