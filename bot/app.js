import { Telegraf, Markup } from "telegraf"

const token = '8010551721:AAG8rtUTorrz56KzSRNyqASUxTiQQOWLHlA'
const webAppUrl = 'https://kaiserno-7331a.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {

    ctx.reply('Добрый день, заходите в казино!', Markup.inlineKeyboard([
        Markup.button.webApp('Войти в Казино',`${webAppUrl}?ref=${ctx.payload}`)
    ]))
})

bot.launch()