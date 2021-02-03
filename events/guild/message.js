module.exports = (Discord, client, message) =>{
    const { prefix } = require('../../config');
    if(!message.content.startsWith(prefix) || message.author.bot) return;
}