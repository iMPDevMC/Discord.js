const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'Ur_ToKeN-hEre'
const fs = require('fs');

// Chat Commands

bot.on('message', function(message){
    if(message.content == '>info'){

        let boticon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription('Informations')
        .setColor("#33a0ff")
        .setThumbnail(boticon)
        .addField("Games", bot.user.username)
        .addField("Created on", bot.user.createdAt)
        .addField("Server Name", message.guild.name)
        .addField("You joined", message.guild.joinedAt)
        .addField("Total Members", message.guild.memberCount);

        return message.channel.send(botembed);
    }
})

bot.on('message', function(message){
    if(message.content == '>azure'){
        message.channel.send('maybe later... :thinking:');
    }
})

bot.on('message', function(message){
    if(message.content == '>ip'){
        message.channel.send('**play.hypixel.net**');
    }
})

bot.on('message', function(message){
    if(message.content == ':lenny:'){
        message.channel.send('( ͡° ͜ʖ ͡°)');
    }
})

bot.on('message', function(message){
    if(message.content == ':kappa:'){
        message.channel.send('here ya go', {files: ["./images/Kappa.jpg"]});
    }
})

bot.on('message', function(message){
    if(message.content == '>twitch'){
        message.channel.send(':thinking:');
    }
})

bot.on('message', function(message){
    if(message.content == 'This is a meme'){
        message.channel.send('thats a cream', {files: ["./images/E.png"]});
    }
})


bot.on('message', function(message){
    if(message.content == '>partners'){
        message.channel.send('None for now... :)');
    }
})

bot.on('message', function(message){
    if(message.content == '>mcpe'){
        message.channel.send('https://discord.gg/NC8KG6r');
    }
})

bot.on('message', function(message){
    if(message.content == '>games'){
        message.channel.send('\n**Skyblock\nSurvival\nFactions\nOP Factions\nOP Skyblock\nHCF\nKitMap\nMaybe more** :thinking:');
    }
})

bot.on('message', function(message){
    if(message.content == '>ZyrenMC'){
        message.channel.send(':thinking: :thinking: :thinking:, wait you want an invite ? oh... maybe later x)');
        message.channel.send('haha just kiding, here https://discord.gg/yMEYYE');
    }
})

bot.on('message', function(message){
    if(message.content == 'this server is trash'){
        message.channel.send('ya wanna br mute ?');
    }
})


// Bot Starting, Status and twitch presence


bot.login(TOKEN);

bot.on('ready', () => {
    bot.user.setStatus('dnd')
    bot.user.setPresence({
        game: {
            name: 'Azure Network',
            type: "WATCHING",
            url: "https://www.twitch.tv/tfp_joft"
        }
    });
});

// Informations

bot.on('ready', () => {
    console.log('>>>> Azure est pret a etre utiliser <<<<');
});

// Backups

//  bot.on('ready', () => {
//    bot.user.setStatus('dnd')
//    bot.user.setPresence({
//        game: {
//            name: 'Watching Azure Network',
//            type: "STREAMING",
//            url: "https://www.twitch.tv/tfp_joft"
//        }
//    });
//});
//
//
//
//