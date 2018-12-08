const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**KND**")
        .setImage("https://vignette.wikia.nocookie.net/dont-starve-game/images/2/23/Woodie.png/revision/latest/scale-to-width-down/350?cb=20140330212814")
        .setThumbnail("https://vignette.wikia.nocookie.net/dont-starve-game/images/2/23/Woodie.png/revision/latest/scale-to-width-down/350?cb=20140330212814")
        .setColor(0x00AE86)
        .addField("Lakabı", "goalkeeper (kaleci)", true)
        .addField("Yetenekleri", `
        *Çok güzel bir eldiveni var
   *Korkunç bir sırrı var (Werebeaver)
   `, true)
   .addField("Motto", `That's nice tree, eh? (güzel ağaç, ha?)`, true)
   .addField("selam", "haha naber")


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'knd',
  description: 'Knd Bot hakkında bilgi verir',
  usage: 'knd'
  };
