import { Telegraf } from 'telegraf';
import 'dotenv/config';

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(`👋 Hey ${ctx.from.first_name}! Ready to log a sales conversation?`, {
    reply_markup: {
      inline_keyboard: [[{
        text: '📋 Open Sales Logger',
        web_app: { url: process.env.FRONTEND_URL }
      }]]
    }
  });
});

bot.help((ctx) => {
  ctx.reply('Tap the button below to log a conversation.', {
    reply_markup: {
      inline_keyboard: [[{
        text: '📋 Open Sales Logger',
        web_app: { url: process.env.FRONTEND_URL }
      }]]
    }
  });
});

bot.launch();
console.log('Bot is running...');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
