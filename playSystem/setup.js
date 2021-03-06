const mongo = require('../utils/mongo')
const serverScheme = require('../schemes/server-scheme')

module.exports = setup


async function setup(cache, guild) {
  if (!cache[guild.id]) {
    cache[guild.id] = { channelId: '', messageId: '', list: [], name: [], time: [], thumbnail: [], ıslooping: 'false' }

    await mongo().then(async mongoose => {
      try {
        console.log(`Veritabanına kanal bilgisi almak için bağlanıyor [${guild.id}]`)
        const result = await serverScheme.findOne({ _id: guild.id })
        if (result != null) {
          cache[guild.id].channelId = result.channelId
          cache[guild.id].messageId = result.messageId
        } else {
          console.log(`Kanal bilgisi bulunamadı [${guild.id}]`)
          cache[guild.id] = null
        }
      } finally {
        console.log(`Bağlantı kapanıyor [${guild.id}]`)
        mongoose.connection.close()
      }
    })
  }
  return cache
}
