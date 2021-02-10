const Discord = require('discord.js');
let client = new Discord.Client();

let prefix = ';';

let fs = require('fs');
const { send } = require('process');

client.commands = new Discord.Collection();

let commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    let command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('The Monkeyception begins!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let args = message.content.slice(prefix.length).split(/ +/);
    let command = args.shift().toLowerCase();

    if(command === 'verão'){
        message.channel.send('**VERÃO SEU FILHO DE UMA PUTA.**')
    } else
    if(command === 'monkepedia'){
        client.commands.get('monkepedia').run(message, args, Discord);
    } else
    if(command === 'random'){
        if(!args[0]) return message.reply('Não tem entre o que eu escolher >:(')
        if(!args[1]) return message.reply('Não tem entre o que eu escolher >:(')
        message.channel.send("**Uga Buga, eu escolho:** " + args[Math.floor(Math.random() * args.length)])
    }
});

client.login('ODA4ODg0MDQwNTU0OTA1NjAx.YCNB9w.Pl9L9blpcLjQUWSPnjrKuaHW2Cc');