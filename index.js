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
  if (message.content.toLowerCase() == "!fire help") {
	message.author.send {
		"embed": {
			"title": "Hey there, " + message.author.username + "! Here's a list of commands you can try!";
			"fields": [
				{"name": "!fire ping", "value": "I'll reply with 'Pong' after I register what you said!", "inline": true},
				{"name": "!fire help", "value": "I'll message you with what you're seeing right here!", "inline": true},
				{"name": "!fire roastme", "value": "I'll attempt to roast you with some lit insults, fam!", "inline": true},
				{"name": "!fire roast @user", "value": "I'll attempt to roast another user, similarly to !fire roastme!", "inline": true}
			];
			"color": -3247003
		}
	}
  };
});

Bot.login(process.env.BOT_TOKEN);
