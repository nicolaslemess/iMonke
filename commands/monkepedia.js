module.exports = {
    name: 'monkepedia',
    description: "Monke inside an embed OMEGALUL!",
    run(message, args, Discord) {
        let embed1 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Gorila da Montanha')
        .setDescription('Os gorilas da montanha vivem nos montes altos vulcânicos e verdes de Ruanda, Uganda e na República Democrática do Congo.')
        .setImage('https://cdn.discordapp.com/attachments/774372894738219028/808952556561760287/unknown.png')
        .setFooter('NOTA: 6,5/10')

        let embed2 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Macaco-Prego')
        .setDescription('O macaco-prego é conhecido por sua grande inteligência, pois é um dos melhores exemplos de animais que usam ferramentas.')
        .setImage('https://cdn.discordapp.com/attachments/774372894738219028/808953023896223744/unknown.png')
        .setFooter('NOTA: 8,75/10')

        let embed3 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Saguí Branco')
        .setDescription('O Sagui-branco é uma espécie de sagui endêmico da Amazônia brasileira. Ocorre na foz do rio Tocantins a leste a entre os rios Tapajós e Cuparí a oeste se estendendo até o rio Curuá ao sul. Possui coloração branca e prateada, sem tufos de pelos nas orelhas. Aparentemente é uma espécie comum, encontrada tanto em na floresta primária de terra firme, quanto em formações secundárias. Entretanto, não existem unidades de conservação ao longo de sua distribuição geográfica.')
        .setImage('https://cdn.discordapp.com/attachments/774372894738219028/808956759628578866/unknown.png')
        .setFooter('NOTA: 11/10')

        let embed4 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Macaco Barrigudo')
        .setDescription('O macaco-barrigudo é um primata que habita florestas úmidas e primárias inundadas e não inundadas, na região da Floresta Amazônica brasileira, colombiana e venezuelana. É um animal que possui uma coloração pálida, marrom escura ou cinza, puxando para o preto. Alimentam-se principalmente de frutas, mas também comem sementes, gomas, flores e algumas presas animais. Possuem hábitos diurnos, são arborícolas e gregários, ou seja, vivem em grupos.')
        .setImage('https://cdn.discordapp.com/attachments/774372894738219028/808956315576958976/unknown.png')
        .setFooter('NOTA: 4,25/10')

        let embed5 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Muriqui do Sul')
        .setDescription('O Muriqui-do-Sul (Brachyteles arachnoides), o maior primata das Américas é também considerado um dos maiores “restauradores da floresta”, pois, em apenas um dia, ele pode dispersar sementes de até oito espécies de plantas.')
        .setImage('https://cdn.discordapp.com/attachments/774372894738219028/808955420835184681/unknown.png')
        .setFooter('NOTA: VERÃO/10')

        let embed6 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Macaco Noite')
        .setDescription('Macacos da noite, assim como as demais espécies de seu gênero. Essa espécie é constituída de animais pequenos, arborícolas, sem dimorfismo sexual e de hábitos noturnos. Sobre essa última característica, está relacionada com a evolução de seus olhos grandes, adaptados à ambientes com ausência parcial de luz.')
        .setImage('https://cdn.discordapp.com/attachments/774372894738219028/808954735423258634/unknown.png')
        .setFooter('NOTA: 5,17/10')

        let embed7 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Saguí')
        .setDescription('Os saguis são animais de hábitos diurnos, de pequeno porte, com peso variando entre 350 a 450 gramas, podendo ser maior em algumas espécies e menores em outras. A pelagem também varia conforme a espécie e normalmente são utilizadas a variação na coloração para nomeá-los pela população.')
        .setImage('https://cdn.discordapp.com/attachments/774372894738219028/808954311190249482/unknown.png')
        .setFooter('NOTA: 8,69/10')

        let embed8 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Macaco Bugio')
        .setDescription('Os macacos bugios são os maiores macacos do Novo Mundo, com comprimento médio da cabeça e do corpo de 22 a 36 polegadas. Uma característica da espécie é sua cauda extremamente longa e grossa. O comprimento médio da cauda é 23 a 36 polegadas, mas há macacos bugios com caudas cinco vezes o comprimento do corpo. Adultos pesam entre 15 e 22 libras.')
        .setImage('https://cdn.discordapp.com/attachments/774372894738219028/808953919660097576/unknown.png')
        .setFooter('NOTA: 6,5/10')

        let embed9 = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Macaco-Aranha')
        .setDescription('Os macacos-aranha têm membros extremamente longos e caudas preênseis. As caudas têm pontas sem pelos e sulcos que lembram impressões digitais. Os macacos têm cabeças pequenas com rostos sem pelos e narinas bem abertas. Suas mãos são estreitas, com dedos longos e curvos e polegares reduzidos ou inexistentes. Dependendo da espécie, a cor do cabelo pode ser branco, dourado, marrom ou preto. As mãos e os pés geralmente são pretos.        ')
        .setImage('https://cdn.discordapp.com/attachments/774372894738219028/808953646041399306/unknown.png')
        .setFooter('NOTA: 3,5/10')

        var embeds = [embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9 ]
        const random = embeds[Math.floor(Math.random() * embeds.length)];

        message.channel.send(random);

    }
}
