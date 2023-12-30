const {
    SlashCommandBuilder,
    EmbedBuilder,
    ChatInputCommandInteraction,
} = require("discord.js");
const ExtendedClient = require("../../../class/ExtendedClient");

module.exports = {
    structure: new SlashCommandBuilder()
        .setName("resources")
        .setDescription("Some useful resources c:"),
    /**
     * @param {ExtendedClient} client
     * @param {ChatInputCommandInteraction<true>} interaction
     */
    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
        .setDescription('## Here are some useful resources 🪴💻\n[Bottleneck Calculator](https://pc-builds.com/bottleneck-calculator/): Building a computer? Make sure to checkout this website to make sure your pc don\'t have a bottleneck!\n\n[FPS Calculator](https://pc-builds.com/fps-calculator/): Not sure if your pc is good enough to run games? Check this website to check it out in few steps!\n\n[Port Master](https://safing.io/): Are you a windows user and don\'t want microsoft to send your data to some sketchy sites to "enhance" your user experience? Use portmaster to block all the suspecious network requests!')
        .setColor('5e6a74')

        if (interaction.user.id === "853147823066578946" ) {
            await interaction.channel.send({ embeds: [embed] })
            await interaction.reply({ content: "Successfully sent the embed in " + interaction.channel.name, ephemeral: true})
        } else {
            await interaction.reply({ embeds: [embed], ephemeral: true });
        }
    },
};
