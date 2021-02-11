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
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('VAI SE FUDER VERÃO KKKKKKKKKKK')
        .setDescription('ah mano, namoral. EU TENHO UM ÓDIO TÃO PROFUNDO PELO VERÃO, QUE EU LIMPARIA O CORPO DELE POR COMPLETO E DEPOIS TE AMARRARIA PARA PARAR O FLUXO DE SANGUE DE CADA MEMBRO ISSO INCLUI PERNAS, BRAÇOS E COXAS. COM O FLUXO DE SANGUE CORTADO, EU INJETO ADRENALINA NO ABDOMEN PARA QUE NÃO DESMAIE, COM UMA LAMINA CORTO PARTE POR PARTE DOS SEUS MEMBROS, PRIMEIRO AS MÃOS, DEPOIS BICEPS, PÉS, PERNA E COXAS. QUANDO O VERÃO ESTIVER APENAS COM A CABEÇA E O CORPO, JOGO UM POUCO DE CAFÉ EM CIMA DO  CORPO DO FILHO DA PUTA PAPADOR DE KILL, ALGUMAS GOTAS CAIRÃO NO CORPO DELE, DEPOIS, COM UMA COLHER DE SOPA ENCAIXO A COLHER EMBAIXO DAS PALPEBRAS E COM UM SIMPLES APLICAR DE FORÇA, A MESMA DE GIRAR UMA CHAVE, ARRANCO SEU OLHO PRA FORA.')
        .setImage("https://cdn.discordapp.com/attachments/774372894738219028/809369225684320256/VERTAo.png")
        .setFooter('FILHO DA PUTA DESGRAÇADO')
        
        message.channel.send(embed)
    } else
    if(command === 'monkepedia'){
        client.commands.get('monkepedia').run(message, args, Discord);
    } else
    if(command === 'random'){
        if(!args[0]) return message.reply('Não tem entre o que eu escolher >:(')
        if(!args[1]) return message.reply('Não tem entre o que eu escolher >:(')
        message.channel.send("**Uga Buga, eu escolho:** " + args[Math.floor(Math.random() * args.length)])
    } else
    if(command === 'teste'){
        message.channel.send('https://gph.is/g/aKQPQw8')
    }
});

client.login(process.env.token);