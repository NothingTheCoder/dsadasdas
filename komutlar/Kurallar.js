const Discord = require('discord.js')
const db = require("croxydb")


exports.run = async(client, message, args) => {
  
const pink = new Discord.MessageEmbed()

  .setColor('#f698d4')
  .setTimestamp()
  .setFooter(`OneWoo Server Kuralları`,client.user.avatarURL())  
  .setImage(`https://cdn.discordapp.com/attachments/725317564074557490/811627276822511646/standard_2.gif`)
  .setDescription(`
<:NormalEmojiM3L1H209:834402279766884353>                        **__Sunucu Kuralları__**                                    

\`1)\` <:NormalEmojiM3L1H110:834402232303878164> **・ Yetkililere Etiket Atmak Yasak! ・\`Ban\`・**

\`2)\` <:NormalEmojiM3L1H110:834402232303878164> **・ Küfür,Argo Kullanımı Yasak! ・\`Mute\`・**

\`3)\` <:NormalEmojiM3L1H110:834402232303878164> ** Siyaset, Irkçılık ve Dini Konuları Konuşmak Yasak!  ・\`Mute\`・**

\`4)\` <:NormalEmojiM3L1H110:834402232303878164> **・Reklam Yapmak Yasak! ・\`Ban\`・**

\`5)\` <:NormalEmojiM3L1H110:834402232303878164> **・ Flood Yapmak Yasak! ・\`Mute\`・**

\`6)\` <:NormalEmojiM3L1H110:834402232303878164> **・ Caps Lock ile Yazmak Yasak! ・\`Mute\`・**

\`7)\` <:NormalEmojiM3L1H110:834402232303878164> **・Yetkilileri Dinlememek Yasak! ・\`Mute\`・**

\`8)\` <:NormalEmojiM3L1H110:834402232303878164>  **・**\`Kurallara Herkes Uymak Zorundadır. Kuralları Okumayanlar, Bilmeyenler Yetkililerimizin Gözünde Okumuş Olarak Kabul Edilecektir.\`


`)
 
return message.channel.send(pink)

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'kurallar',
    description: 'bilgilendirme',
    usage: 'bilgilendirme'
}
