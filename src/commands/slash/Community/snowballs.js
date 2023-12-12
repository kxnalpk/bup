const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');

const Drops = require("../../../schemas/DropsSchema");

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('balance')
        .setDescription('Check how many showballs you have!'),
    /**
     * @param {ExtendedClient} client 
     * @param {ChatInputCommandInteraction} interaction 
     */
    run: async (client, interaction) => {

        let content = '';

        const user = await Drops.findOne({ userId: interaction.user.id });

        if (user) {
            if (user.snowballs === 1) {
                content = `You have **${user.snowballs}** snowball!`
            } else {
                content = `You have **${user.snowballs}** snowballs!`
            }
        } else {
            content = 'You have **0** snowballs :('
        }

        return interaction.reply({ content: content });

    }
};