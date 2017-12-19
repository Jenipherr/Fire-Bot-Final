// Variables

const Discord = require("discord.js");
const Version = "1.0.0";
const Token = "You can't get this.";
var Bot = new Discord.Client;
/*var StartupChannelId = "389963025722900484";
var StartChannel = Bot.channels.get(StartupChannelId);
*/

var Insult1 = ["hair", "face", "arm", "leg", "head"];
var Insult2 = ["stupid", "ugly", "skinny", "thicc", "invisible", "short", "long"];
var Insult3 = ["you can't ride a bike", "your mirror breaks when you look at it", "it's nonexistant", "you're stupid", "you look like Peter Pan"];


var Owner = "229403861721415681";

// Functions

function RandomFromTable(Table) { 
    var Random = Math.floor( ( Math.random() * (Table.length)) + 1);
    return Table[Random];
};

// Initialize

Bot.on("ready", function() {
	console.log("Ready!");
	var StartupChannelId = "389963025722900484";
	var StartChannel = Bot.channels.get(StartupChannelId);
	StartChannel.send("FireBot initialized!");
	Bot.user.setGame("!fire help");
});

Bot.on('message', message => {
  if (message.content.toLowerCase() === "!fire ping") {
    message.reply("Pong!");
  };
  if (message.content.toLowerCase() == "!fire help") {
	message.author.send({"embed": {
			"title": "Hey there, " + message.author.username + "! Here's a list of commands you can try!",
			"fields": [
				{"name": "!fire ping", "value": "I'll reply with 'Pong' after I register what you said!", "inline": true},
				{"name": "!fire help", "value": "I'll message you with what you're seeing right here!", "inline": true},
				{"name": "!fire roastme", "value": "I'll attempt to roast you with some lit insults, fam!", "inline": true}
				//{"name": "!fire roast @user", "value": "I'll attempt to roast another user, similarly to !fire roastme!", "inline": true}
			],
			"color": 15879226
		}
    });
  };
  if (message.content.toLowerCase()) == "!fire roastme") {
	message:reply("your "+RandomFromTable(Insult1)+" is so "..RandomFromTable(Insult2)+", "+RandomFromTable(Insult3)+".")	  
  }
});

Bot.login(process.env.BOT_TOKEN);
