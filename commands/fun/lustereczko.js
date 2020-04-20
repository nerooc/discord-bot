module.exports = {
    name: "lustereczko",
    aliases: [""],
    category: "fun",
    description: "Pat a random person from the server",
    usage: "<input>",
    run: async (client, message, args) => {

        var answers = ["Ty mi powiedz.", "27", "Jeden rabin powie tak, drugi rabin powie nie.", "Do matki też tak mówisz?", "W szkole Cię tego nie nauczyli?", "Z pewnością!"];

        var randomElement = answers[Math.floor(Math.random() * answers.length)];
        const msg = await message.channel.send(randomElement);
    }
}