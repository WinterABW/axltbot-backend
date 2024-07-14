const { Telegraf, Markup } = require('telegraf');
const http = require('http');

/* const botApp = process.env['APP']
const token = process.env['BOT_TOKEN']; */
const botApp = "https://t.me/Axolt_bot/app";
const token = "6747056687:AAFU051yWsJqeawZs9uG4GJeN5p7o2vetOA";

const bot = new Telegraf(token);

bot.start((ctx) => {
  ctx.reply(
    `Hello! Welcome to Axolt Miner 😎
You are now the director of a crypto exchange.
Which one? You choose. Tap the screen, collect coins, pump up your passive income,
develop your own income strategy.
We’ll definitely appreciate your efforts once the token is listed (the dates are coming soon).
Don't forget about your friends — bring them to the game and get even more coins together!`,
    Markup.inlineKeyboard([
      [Markup.button.url("Let´s Play!!!", botApp)],
      [Markup.button.callback("Button 2", "btn_2")],
      [Markup.button.callback("Button 3", "btn_3")],
    ])
  );
});

bot.action("btn_2", (ctx) => {
  ctx.reply("You pressed Button 2");
});

bot.action("btn_3", (ctx) => {
  ctx.reply("You pressed Button 3");
});

bot.launch();

console.log("Bot is running...");

// SERVER
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/status') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot is running...');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
