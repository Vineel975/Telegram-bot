import { Telegraf } from 'telegraf';
import 'dotenv/config';

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(`👋 Hey ${ctx.from.first_name}! Ready to log a sales conversation?`, {
    reply_markup: {
      keyboard: [[{
        text: '📋 Open Sales Logger',
        web_app: { url: process.env.FRONTEND_URL }
      }]],
      resize_keyboard: true,
      persistent: true
    }
  });
});

bot.help((ctx) => {
  ctx.reply('Tap the 📋 Open Sales Logger button below to log a conversation.');
});

bot.launch();
console.log('Bot is running...');

// Graceful shutdown
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
