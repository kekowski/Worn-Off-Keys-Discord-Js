const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const roleClaim = require('./role-claim')

client.on('ready', () => {
  console.log('The client is ready!')

  roleClaim(client)
})

client.login(config.token)
client.login("ODAwMDI2MzMxNDQ1NzIzMTY2.YAMIlQ.-cw9axTcgsNVBcidV-eElM8A4UQ");
