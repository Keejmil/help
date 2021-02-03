const Discord = require('discord.js');
const nodemon = require('nodemon');
const { token, prefix } = require('./config');
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.once('ready', () =>{
    console.log(`${client.user.tag} polączył się z Discordem.`);
})

client.login(token);