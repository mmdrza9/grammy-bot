import { Bot } from "grammy";
import { config } from "dotenv";

const dotenv = config();
if (!process.env.TOKEN) throw new Error("bot token is empty");
const bot = new Bot(process.env.TOKEN);

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.on("message", async (ctx) => {
  const userName = ctx.message.from.username;
  const userId = ctx.message.from.id;
  const date = new Date();
  console.log(
    `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} / ${userId}`,
  );
  ctx.reply(date.toString());
});

bot.start().then(() => console.log('Running...'));
