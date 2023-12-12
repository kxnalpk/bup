const { log } = require("../../functions");
const { connect } = require("mongoose");
const config = require("../../config");
const ExtendedClient = require('../../class/ExtendedClient');

module.exports = {
    event: 'ready',
    once: true,
    /**
     * 
     * @param {ExtendedClient} _ 
     * @param {import('discord.js').Client<true>} client 
     * @returns 
     */
    run: async (_, client) => {

        await connect(process.env.MONGODB_URI || config.handler.mongodb.uri).then(() => {
            log('MongoDB is connected to the atlas!', 'done')
        });

        log('Logged in as: ' + client.user.tag, 'done');

    }
};