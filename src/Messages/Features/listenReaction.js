const SendDelete = require("../../utils/Send&Delete")

module.exports = (client, instance) => {
    client.on('messageReactionAdd', (reaction, user) => {
        const message = reaction.message
        const emoji = reaction.emoji.name
        const guildData = client.guildData.get(message.guild.id)
        const member = message.guild.members.cache.get(user.id)

        reaction.users.remove(user)

        if (user.id == client.user.id) return
        else if (guildData.message.id != message.id) return
        else if (!member.voice.channel) return SendDelete('Reaksiyonları kullanabilmek için ses kanalında olmanız gerekiyor', message.channel, 2500);
        else if (!guildData.player?.voiceConnection && member.voice.channelId != guildData.player.channel.id) return SendDelete('Reaksiyonları kullanabilmek için aynı ses kanalında olmanız gerekiyor', message.channel, 2500);

        switch (emoji) {
            case '⏯️':
                guildData.player.paunp()
                break;
            case '⏭️':
                guildData.player.skip()
                break;
            case '⏏️':
                guildData.player.quit()
                break;
            case '🔁':
                guildData.player.loop()
                break;
            case '🔀':
                guildData.player.shuffle()
                break;
            case '🆑':
                guildData.player.clear()
                break;
        }
    })
}