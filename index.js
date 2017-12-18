// Variables

const Discord = require("discord.js");
const Version = "1.0.0";
const Token = "You can't get this.";
var Bot = new Discord.Client;
/*var StartupChannelId = "389963025722900484";
var StartChannel = Bot.channels.get(StartupChannelId);
*/

var Owner = "229403861721415681";

// Initialize

Bot.on("ready", function() {
	console.log("Ready!");
	var StartupChannelId = "389963025722900484";
	var StartChannel = Bot.channels.get(StartupChannelId);
	StartChannel.send("FireBot initialized!");
});

Bot.on('message', message => {
  if (message.content.toLowerCase() === "!fire ping") {
    message.reply("Pong!");
  };
  /*if (message.content.toLowerCase() == "!fire help") {
	  message.author.dmChannel.send("Currently the only command is !fire ping.")
  };*/
});

Bot.login(process.env.BOT_TOKEN);
