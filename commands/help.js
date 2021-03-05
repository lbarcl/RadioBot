const command = require('../utils/command');
const config = require('../config.json');
const {MessageEmbed} = require('discord.js');

module.exports = async (client) => {
  command(client, ['yardım', 'help'], async (message) =>{
    const embed = new MessageEmbed()
    embed.setAuthor(message.member.user.username, message.member.user.avatarURL())
    embed.setTitle('Yardım')
    embed.setDescription(`Radio müzik botuna hoşgeldiniz, bu botun öncüsü " ${config.prefix} " (önünde öncüsü olmayan komutlar, botun kanalında kullanılmalıdır)`)
    embed.addField('Özellikler', 'Bot youtubedan şarkı ve playlist çalabılır, çalan şarkıyı döngüye alabilir, video hakkında bilgi verebilir')
    embed.addField(`${config.prefix}st`, 'Bot kurulumu yapar her sunucu için bir defa kullanılabilir, admin komutudur', true)
    embed.addField(`${config.prefix}vbul`, 'Girdiğiniz url veya kelimeden video bilgilerini kullandığınız kanala gönderir', true)
    embed.addField(`${config.prefix}reg`, 'Sisteme kayıt olmanızı sağlar, kayıt olmak beraberinde yenş özellikler getirir', true)
    embed.addField(`${config.prefix}b`, 'Beğendiğiniz şarkıları listeler, kayıt olmak gereklidir', true)
    embed.addField(`${config.prefix}sl`, 'Suncu çalma listesini görüntüler', true)
    embed.addField('\u200b', '\u200b', true)
    embed.addField(`döngü`, 'Listeyi döngüye alır, eğer döngüdeyse döngüden çıkar', true)
    embed.addField(`ayrıl`, 'Listeyi temizleyerek ses kanalınından ayrılır', true)
    embed.addField(`temizle`, 'Çalma listesini temizler', true)
    embed.addField(`geç`, 'Çalmakta olan şarkıyı geçer, listede şarkı kalmadıysa ses kanalından ayrılır', true)
    embed.addField('\u200b', '\u200b', true)
    embed.addField('\u200b', '\u200b', true)
    embed.addField(`beğen`, 'Çalmakta olan şarkıyı beğenilenlere ekler, kullanabilmek için kayıt olunması gereklidir', true)
    embed.addField(`beğenme`, 'Çalmakta olan şarkıyı beğenilenlerden çıkarır, kullanabilmek için kayıt olunması gereklidir', true)
    embed.addField(`beğendiklerim`, 'Beğenilen şarkıları sıraya ekler, kullanabilmek için kayıt olunması gereklidir', true)
    embed.addField(`ekle`, 'Çalan şarkıyı sunucu listesine ekler', true)
    embed.addField(`çıkar`, 'Çalan şarkıyı sunucu listesinden çıkartır', true)
    embed.addField(`çalmalistesi`, 'Sunucu çalma listesini listeye ekler', true)
    embed.setColor(config.embedColor)

    message.channel.send(embed)
  })
}