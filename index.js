const {
    Discord,
    Client,
    MessageEmbed
} = require("discord.js");


const {
    config
} = require("dotenv");

const client = new Client({
    disableEveryone: true
});

config({
    path: __dirname + "/.env"
});

client.on("ready", () => {
    console.log(`I am online now! My name is ${client.user.username}`);
    client.user.setPresence({
        status: "online",
        game: {
            name: "me getting developed",
            type: "WATCHING"
        }
    });

});

client.on("message", async message => {
    const prefix = "!";

    if (message.author.bot) return;

    if (!message.guild) return;

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd === "ping") {
        const msg = await message.channel.send(`Pinging...`);

        msg.edit(`Pong\n Latency is ${Math.floor(msg.createdAt - message.createdAt)}ms \n API Latency is ${Math.round(client.ws.ping)}ms`);
    }

    if (cmd == "say") {
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
});

client.login(process.env.TOKEN);