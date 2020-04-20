  const Discord = require("discord.js")
  const superagent = require("superagent")

  module.exports = {
      name: "meme",
      noalias: "No Aliases",
      description: "Sends a meme from a website!",
      usage: "<input>",
      accessableby: "Members",
      aliases: [],
      run: async (bot, message, args) => {
          let msg = await message.channel.send("Generating...")

          let {
              body
          } = await superagent
              .get(`https://meme-api.herokuapp.com/gimme`)

          if (!{
                  body
              }) return message.channel.send("I broke! Try again.")

          let mEmbed = new Discord.MessageEmbed()
              .setAuthor(`TestBot MEMES!`, message.guild.iconURL)
              .setImage(body.url)
              .setTimestamp()
              .setFooter(`TEST BOT`, bot.user.displayAvatarURL)

          message.channel.send({
              embed: mEmbed
          })

          msg.delete();
      }
  }