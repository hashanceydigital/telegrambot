const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const TOKEN = '6161719689:AAFdQNgcdrt9U4O4VvpKrZtkVy_XDOJ2RK4'
const web_link = 'https://taupe-truffle-a7b2a2.netlify.app/'

const bot = new Telegraf(TOKEN)

bot.start((ctx) => ctx.reply('Welcome to Ceydigital', {reply_markup: {keyboard: [[{text: 'web app', web_app:{url: web_link}}]]} }))

bot.launch()