process.title = 'Fredbout Beta'


const fetch = require('node-fetch');
const hastebin = require("hastebin-gen");
const config = require('../../config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'eval',
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
      

            if (message.author.id != config.owner) {return}
            const args = message.content.slice('!').trim().split(/ +/g);
            let code = args.slice(1).join(" ");
            try {
                const evaled = eval(code);
                const clean = await evaled;
                // sends evaled output as a file if it exceeds the maximum character limit
                // 6 graves, and 2 characters for "js"
                const MAX_CHARS = 3 + 2 + clean.length + 3;
                if (MAX_CHARS > 2000) {
                  message.channel.send("Output exceeded 2000 characters. Sending as a file.", { files: [{ attachment: Buffer.from(clean), name: "output.txt" }] });
                }
                let username = message.member.user.username;


            
            
                const exampleEmbed = new Discord.RichEmbed()
                .setColor('#13bd21')
                .setURL('https://www.youtube.com/watch?v=NvS351QKFV4')
                .setAuthor(`${username}`, "https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".png")
                .addField(':inbox_tray: Input:', `\`\`\`js\n${code}\n\`\`\``, false)
                .addField(':outbox_tray: Output:', `\`\`\`js\n${clean}\n\`\`\``, false)
                message.channel.send(exampleEmbed)
              } catch (err) {
                let username = message.member.user.username;



                const exampleEmbed = new Discord.RichEmbed()
                .setColor('#e60910')
                .setURL('https://www.youtube.com/watch?v=NvS351QKFV4')
                .setAuthor(`${username}`, "https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".png")
                .addField(':inbox_tray: Input:', `\`\`\`js\n${code}\n\`\`\``, false)
                .addField(':interrobang: Error:', `\`\`\`xl\n${await this.client, err}\n\`\`\``, false)
                message.channel.send(exampleEmbed)
                  
        }}}
