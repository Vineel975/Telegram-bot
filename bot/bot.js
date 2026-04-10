import { Telegraf } from 'telegraf';

const bot = new Telegraf('TOKEN');

bot.start((ctx) => {
  ctx.reply('Open Logger', {
    reply_markup: {
      keyboard: [[{
        text: 'Open App',
        web_app: { url: 'https://your-app.vercel.app' }
      }]]
    }
  });
});

bot.launch();
