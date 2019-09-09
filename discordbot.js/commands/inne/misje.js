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
            name: 'misje',
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
                // This is where you place the code you want to run for your command
                request('https://www.stormshield.one/a/t29rq6', (error, response, html) => {
                    if (!error && response.statusCode == 200) {
                        const $ = cheerio.load(html);
                        // let mocMisji = $('.power').text() ;
                        // mocMisji = mocMisji.slice(40);
                        // let nazwaMisji = $('.mission_name').text() ;
                        // nazwaMisji = nazwaMisji.slice(25);
                        // nazwaMisji = nazwaMisji.slice(0, -63);
                        // let nazwaStrefy = nazwaMisji.slice(50);
                        let xd = $('.datagrid-row').toArray();
                        console.log(xd.length);
                        let moc = xd[1].children[1].children;

                        console.log(xd[1].children[1].children[1].data); //pokazuje moc misji
                        console.log(xd[1].children[3].children[0].children[0].data); //pokazuje nazwę misji(np. wystrzel rakiete/naprawa schronu itp)
                        console.log(xd[1].children[3].children[3].data) //pokazuje gdzie znajduję się misja (`dolina/twine i przedmieścia, miasto itp)
                   
                        let text;
                        // for (text of moc) {
       
                        //     message.author.send('Misja ' + text + 'mocy');
                        // }
                        message.channel.send('Dostępnych jest: ' + xd.length + ' misji na legendarny profit:')
       
                        for (let i = 0; i < xd.length; i++) {
       
                            console.log(xd[i].children[1].children[1].data + xd[i].children[3].children[0].children[0].data + xd[i].children[3].children[3].data);
                           
                            // message.author.send('Misja: ⚡' + xd[i].children[1].children[1].data + ' mocy ' + xd[i].children[3].children[0].children[0].data + ' ' + xd[i].children[3].children[3].data)
                            let misja = new Discord.RichEmbed()
                            .setColor('ffae34')
                            .setTitle('Misja na Legendarny Profit+!')
                            misja.setDescription('**' + xd[i].children[3].children[3].data + '**' +  ' \n**PERK-UP! (Legendary)**\n' + (xd[1].children[3].children[0].children[0].data) + ' ' + xd[i].children[1].children[1].data + '⚡')
                           
                            message.channel.send(misja)
                        }
       
                        // message.author.send('Misja ' + text);
       
                        // message.author.send(mocMisji);
                        // message.author.send(nazwaMisji);
       
                        // var power_level = powerLevel.find('span').text();
                        // power_level = power_level.slice(0,-7);
                        // power_level = Math.floor(power_level * 1)
                        // console.log(power_level);
                        // message.member.setNickname(username+'⚡'+power_level);
                        // message.channel.sendMessage('Zmieniono nick na ' +"``"+ username+"``");
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
