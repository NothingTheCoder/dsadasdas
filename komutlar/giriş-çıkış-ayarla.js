const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");
 
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`<:nooo:834402193351114772> Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`);
 
  let channel = message.mentions.channels.first();
  if (!channel) {
    return message.reply("Bir kanal etiketleyin");
  }
  db.set(`gçkanal_${message.guild.id}`, channel.id);
  message.channel.send(`<a:yanok:834402207050498058> | ** Resimli Hoşgeldin - Güle Güle kanalı ${channel} Olarak Ayarlandı.** `);
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gç-ayarla"],
  permLevel: 0
};
 
exports.help = {
  name: "giriş-çıkış-ayarla",
  description: "Giriş Çıkış Kanalını Ayarlar.",
  usage: "gç-ayarla <#kanal>"
};