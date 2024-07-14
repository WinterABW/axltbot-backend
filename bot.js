const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const bot = new Telegraf("6747056687:AAFU051yWsJqeawZs9uG4GJeN5p7o2vetOA");
bot.start((ctx) => {
    ctx.reply(`Hello! Welcome to Axolt Miner 😎
You are now the director of a crypto exchange.
Which one? You choose. Tap the screen, collect coins, pump up your passive income,
develop your own income strategy.
We’ll definitely appreciate your efforts once the token is listed (the dates are coming soon).
Don't forget about your friends — bring them to the game and get even more coins together!`);
});

bot.on(message('text'), async (ctx) => {
    // Explicit usage
    await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`)
  
    // Using context shortcut
    await ctx.reply(`Hello ${ctx.state.role}`)
  })
bot.launch();
