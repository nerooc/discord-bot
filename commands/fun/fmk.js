module.exports = {
    name: "fmk",
    aliases: ["fm"],
    category: "fun",
    description: "F**k, marry, kill",
    usage: "<input>",
    run: async (client, message, args) => {

        var user = [];
        var author = "<@" + message.author + ">";
        var length = 3;

        for (var i = 0; i < length; i++) {
            user[i] = "<@" + message.guild.members.cache.random().user + ">";
        }

        const msg = await message.channel.send(author + ": \nzabije " + user[0] + ", \npoślubi " + user[1] + " \ni cimcirimci ram pam pam z " + user[2]);
    }
}