module.exports = {
    name: "hug",
    aliases: ["hugging"],
    category: "fun",
    description: "Hug a random person from the server",
    usage: "<input>",
    run: async (client, message, args) => {

        var user = "<@" + message.guild.members.cache.random().user + ">";
        var author = "<@" + message.author + ">";

        const msg = await message.channel.send(author + " tuli " + user);
    }
}