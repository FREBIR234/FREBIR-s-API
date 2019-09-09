'use strict'
const Discord = require('discord.js');
const cheerio = require('cheerio');
const request = require('request');
const translate = require('translate');
const googleTranslate = require('google-translate');
 
 
const { Command } = require('klasa');

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            name: 'cr',
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
                // This is where you place the code you want to run for your command
                request(`https://royaleapi.com/player/${args[1]}`, (error, response, html) => {
                    if (!error && response.statusCode == 200) {

                        const $ = cheerio.load(html);

                        const koronki = $('.ui.horizontal.divided.list').toArray();
                        console.log(koronki.length);
                        console.log(koronki[4])



                    } else message.author.send('Połączenie nieudane. Spróbuj ponownie. Kod błędu: ' + error );
                })
           
       
            //     async init() {
            //         /*
            //          * You can optionally define this method which will be run when the bot starts
            //          * (after login, so discord data is available via this.client)
            //          */
            //     }
       
            // )
            }
        }
