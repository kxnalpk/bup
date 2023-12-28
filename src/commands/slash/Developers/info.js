const {
    SlashCommandBuilder,
    EmbedBuilder,
    ChatInputCommandInteraction,
    PermissionFlagsBits
} = require("discord.js");
const ExtendedClient = require("../../../class/ExtendedClient");

module.exports = {
    structure: new SlashCommandBuilder()
        .setName("info")
        .setDescription("Info embed")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    options: {
        developers: true,
    },
    /**
     * @param {ExtendedClient} client
     * @param {ChatInputCommandInteraction<true>} interaction
     */
    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
        .setColor('5e6a74')
        .setDescription('## Welcome to Computer Builders 🪴💻\nA community dedicated to teaching people how to select the best parts and build their custom PCs. Share your knowledge, learn new things from others, and discuss computer hardware, software, and many other topics!\n## Some rules you gotta follow ✌️📑\n- Always show respect and kindness towards other members.\n- Communicate solely in English within this chat space.\n- Use your brain, stay mature and use your common sense.\n- Follow Discord\'s terms of services & community guidelines.')

        await interaction.channel.send({ embeds: [embed] });
        return interaction.reply({ content: "Successfully sent the embed in " + interaction.channel.name, ephemeral: true });
    },
};
