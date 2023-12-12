const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');
const Drops = require("../../../schemas/DropsSchema");

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('leaderboard')
        .setDescription('Show the leaderboard for snowballs!'),
    /**
     * @param {ExtendedClient} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
        .setColor('#2b2d31')

        const topUsers = await Drops.find().sort({ snowballs: -1 }).limit(5);

        if (topUsers.length > 0) {

            const leaderboardContent = topUsers.map((user, index) => `\`${index + 1}.\` <@${user.userId}> : **${user.snowballs}** snowballs`).join('\n');
            embed.setDescription(leaderboardContent);

            interaction.reply({ embeds: [embed] });
        } else {
            interaction.reply({ content: "null", ephemeral: true });
        }
    }
};
