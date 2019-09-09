process.title = 'Fredbout Beta'
const Discord = require('discord.js');
const client = new Discord.Client();
const { Client } = require('klasa');
const config = require('./config.json')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

new Client({
    clientOptions: {
        fetchAllMembers: false
    },
    prefix: '!',
    cmdEditing: true,
    typing: true,
    ignoreSelf: true,
    ignoreBots: true,
    cmdLogging: true,
    readyMessage: (client) => `${client.user.tag}, Ready to serve ${client.guilds.size} guilds and ${client.users.size} users`
}).login(config.token);



