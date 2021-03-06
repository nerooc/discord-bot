const Discord = require("discord.js")
const superagent = require("superagent")

module.exports = {
    name: "pies",
    noalias: "No Aliases",
    description: "Sends a meme from a website!",
    usage: "<input>",
    accessableby: "Members",
    aliases: [],
    run: async (bot, message, args) => {
        let msg = await message.channel.send("Generuję...")

        let {
            body
        } = await superagent
            .get(`https://dog.ceo/api/breeds/image/random`)

        if (!{
                body
            }) return message.channel.send("Zepsute, napraw :(")

        let mEmbed = new Discord.MessageEmbed()
            .setAuthor(`Łap pieseła!`, message.guild.iconURL)
            .setImage(body.message)
            .setTimestamp()

        message.channel.send({
            embed: mEmbed
        })

        msg.delete();
    }
}