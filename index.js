import { Client, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  message.reply("Hello from bot");
  console.log(message.content);
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("Pong!!");
});

client.login(process.env.TOKEN);
