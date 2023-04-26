require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
    partials:['MESSAGES']
})

const BOT_FIX = "!";
const PREVIEW_CMD = "preview";




client.on('ready', () => {
    console.log("bot ready")
})

client.login(process.env.BOT_TOKEN)

client.on('messageCreate',msg =>{
    if (msg.content ==="!previewplz"
        )
 })