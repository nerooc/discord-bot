module.exports = {
    name: "fmkb",
    aliases: [],
    category: "fun",
    description: "F**k, marry, kill [wersja Bezradnego]",
    usage: "<input>",
    run: async (client, message, args) => {

        var user = [];
        var author = "<@" + message.author + ">";
        var length = 3;

        for (var i = 0; i < length; i++) {
            user[i] = "<@" + message.guild.members.cache.random().user + ">";
        }

        const msg = await message.channel.send(author + ": \nsprzeda kontre na potylice " + user[0] + ", \nstrzeli z bara " + user[1] + " \ni dupnie z łokcia " + user[2]);
    }
}