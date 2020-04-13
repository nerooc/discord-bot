module.exports = {
    name: "say",
    aliases: ["bc", "broadcast"],
    category: "moderation",
    description: "Says your input via the bot",
    usage: "<input>",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();

        if (args.length < 1) return message.reply("Nothing to say").then(m => m.delete(5000));

        const roleColor = message.guild.me.displayHexColor;

        if (args[0].toLowerCase() === "embed") {
            const embed = new MessageEmbed()
                .setColor(roleColor)
                .setDescription(args.slice(1).join(" "))
                .setTimestamp()
                .setImage('https://i.chzbgr.com/full/9097238272/h3EBA2E25/how-it-really-is-what-it-feels-like-a-convert-all-power-from-the-life-support-to-the-main-thrusters');

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
    }
}