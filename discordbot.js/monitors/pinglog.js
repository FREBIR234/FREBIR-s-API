
const { Monitor } = require('klasa');
const Discord = require('discord.js');
module.exports = class extends Monitor {

	constructor(...args) {
		super(...args, {
			name: 'pinglog',
			enabled: true,
			ignoreSelf: true,
			ignoreOthers: false
		});
	}

	async run(message) {
        console.log(entry)
                let targetUser = message.guild.member(message.mentions.users.first())
                if (targetUser != null) {
                const args = message.content.slice('').trim().split(/ +/g);
                let tresc = args.slice(1).join(" ");
                let username = message.member.user.username;
                let usertag = message.member.user.discriminator;
                let user = username+"#"+usertag;
            
            
                const exampleEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setTitle('Ping/Wzmianka/Mention')
                .setURL('https://www.youtube.com/watch?v=NvS351QKFV4')
                .setAuthor(`${username}`, "https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".png")
                .addField('Kto spingował?' , `<@${message.member.id}> [${user}]`, true)
                .addField('Spingowani', `<@${targetUser.id}>`, true)
                .addField('ID wiadomości', `${message.id}`, true)
                .addField('Kanał', `<#${message.channel.id}>`, true)
                .addField('Treść', `${message}`, true)
                .setTimestamp()
            
            message.guild.channels.get(`603932743197261824`).send({embed: exampleEmbed})
                }
            let targetRole = message.guild.role(message.mentions.roles.first())
            if (targetRole != null) {
                console.log('test')
            }
            }       
        }