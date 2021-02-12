const Discord = require('discord.js');
const client = new Discord.Client();

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
    client.user.setStatus("invisible");
});

client.on("message", (message) => {
    if(message.content.includes('Wished')) {
      message.react("😎");
    }
  });

client.login(process.env.token);