// Variables

const Discord = require("discord.js");
const Version = "1.0.0";
const Token = "Mjg3NzY4OTg2ODc4MjE0MTQ0.DRdSkw.KPwRAwmfloW0-TleP7u2Kdjx8_k";
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
})

Bot.login(Token);
