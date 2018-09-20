const Discord = require('discord.js')
module.exports.run = (client, messages, args) => {
    if(!message.guild.members(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You don't have the permission to kick members");
    if(!message.guild.members(client.user).hasPermission("KICK_MEMBERS")) return message.reply("You don't have the permission to kick members");
    let user = message.mentions.users.first();
    let reason = args.slice(1).join(" ");
    let logs = client.channels.find('name', 'logs');

    if(!logs) return message.reply("No 'logs' channel avalible");
    if (message.mentions.users.slice < 3) return message.reply("Please tag the person.");
    if(reason) return message.reply("You must put a reason.");
    if(message.guild.member(user)
    .kickable) return message.reply("I can't kick that user");

    message.guild.member(user).kick();

    const kickembed = new Discord.RichEmbed()
    .setAuthor('Kicked ${user.username}', user.displayAvatarURL)
    .addField("Informations", '**User** ${user.tag}\n**Mod** ${message.author.tag}\n**Reason** ${reason}');
    logs.send({
        embed: kickembed
    })




    module.exports.help = {
        name: "kick"
    }
} 