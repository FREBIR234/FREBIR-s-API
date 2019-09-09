const fetch = require('node-fetch');
const hastebin = require("hastebin-gen");
const config = require('../../config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'kanał',
            enabled: true,
            runIn: ['text', 'dm'],
            cooldown: 0,
            aliases: ['kanal'],
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
        const channels = require("../../channels.json");
        const channels2 = require("../../channels.json");
        const fs = require("fs");
        const args = message.content.slice('>').trim().split(/ +/g);
        let rola = message.guild.roles.find("name", "legit")
        if(!message.member.roles.has(rola.id)){
            message.channel.send(`Najpierw musisz zakupić Kanał Prywatny w sklepie serwerowym (!shop)!`)
            return;
        }

       message.guild.createChannel(message.author.username, "voice").then(chan => {
                 //rola
        message.member.removeRole(`617331932786720768`)
                //katygoria
        let category = message.guild.channels.find(c => c.id == "603520208514318348" && c.type == "category");
        if (!category) throw new Error("Category channel does not exist");
     chan.setParent(category.id);

            //ustawienia kanału

        chan.setUserLimit(4)
        
            //uprawnienia
        chan.overwritePermissions(message.author, { // Pass 'UserResolvable' type thing as described in Wiki!
        VIEW_CHANNEL: true, MANAGE_CHANNELS : true,
        CONNECT : true,   MANAGE_ROLES: true,

      });
    
      channels[message.author.id] = {
        users: 4,
        time: Date.now(),
        channel : chan.id
    };

    fs.writeFile("channels.json", JSON.stringify(channels), (err) => {
        if (err) {
            console.log(err);
        }
    });

    channels2[chan.id] = {
        users: 4,
        time: Date.now(),
        author : message.author.id
    };
    fs.writeFile("channels.json", JSON.stringify(channels2), (err) => {
        if (err) {
            console.log(err);
        }
    });


  }).catch(console.error);

    }
}