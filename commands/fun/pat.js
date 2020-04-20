module.exports = {
    name: "pat",
    aliases: [""],
    category: "fun",
    description: "Pat a random person from the server",
    usage: "<input>",
    run: async (client, message, args) => {

        var user = "<@" + message.guild.members.cache.random().user + ">";
        var author = "<@" + message.author + ">";

        const msg = await message.channel.send(author + " głaszcze " + user);
    }
}