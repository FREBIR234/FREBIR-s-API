const fetch = require('node-fetch');
const hastebin = require("hastebin-gen");
const config = require('../../config.json');
const Discord = require('discord.js');
const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'banan',
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
    async run(msg, [...params]) {
        const entry = await msg.guild.fetchAuditLogs({type: 'CHANNEL_UPDATE'}).then(audit => audit.entries.first())

            let emb = new Discord.RichEmbed()
            var cm = Math.floor(Math.random() * 50); // Max 50 cm, Min 0 cm.
            var banan = "─".repeat(Math.floor(cm / 5)); // 1 przedluzenie = 5cm
            
            emb.setThumbnail("http://botpanel.pl/banany.png")
            emb.addField(":banana: Banan", "Długość banana " + msg.author.username + " wynosi **" + cm + "** cm")
            emb.addField("Długość w skali 1:5", "```" + banan + "⇾```")
            emb.setColor(0x7289da);
            
            msg.channel.send(emb);
        
        

        
    }
}
