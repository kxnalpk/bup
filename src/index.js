require('dotenv').config();
const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const ExtendedClient = require('./class/ExtendedClient');

const client = new ExtendedClient();

const energyRequired = 70;

client.on('messageCreate', (message) => {

  if (message.author.bot || message.system) return;

  const button = new ButtonBuilder()
    .setCustomId('drop_button')
    .setStyle(ButtonStyle.Primary)
    .setLabel("Collect");

  const row = new ActionRowBuilder()
    .addComponents(button);

  let random = Math.random() * 70 + 10;

  const messageLength = message.content.length;

  if (messageLength > 50) {
    random += 15;
  } else if (messageLength > 40) {
    random += 10;
  } else if (messageLength > 30) {
    random += 5;
  }

  const boostMessage = (messageLength > 50) ? ` (boosted by 15%)` : (messageLength > 40) ? ` (boosted by 10%)` : (messageLength > 30) ? ` (boosted by 5%)` : '';

  if (random > energyRequired) {
    message.guild.channels.cache.get('1180575994101366885').send(`\`${message.author.username}\` sent a message which generated \`${random.toFixed(2)}%\` energy${boostMessage}. The energy required for drop is \`${energyRequired}%\`. (${message.url})`);
    message.channel.send({ content: "Woo! You found a snowball, hurry up and click the button to collect! ⛄", components: [row] });
  } else {
    message.guild.channels.cache.get('1180575994101366885').send(`\`${message.author.username}\` sent a message which generated \`${random.toFixed(2)}%\` energy${boostMessage}. This is less than the energy required for drop (\`${energyRequired}%\`). (${message.url})`);
  }

});

client.start();

process.on('unhandledRejection', console.error);
process.on('uncaughtException', console.error);