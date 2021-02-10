const Discord = require('discord.js');
let client = new Discord.Client();

let prefix = ';';

let fs = require('fs');

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
    }
});

client.login(process.env.token);