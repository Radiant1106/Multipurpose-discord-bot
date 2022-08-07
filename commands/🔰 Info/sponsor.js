const {MessageEmbed} =require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const { swap_pages2	 } = require(`${process.cwd()}/handlers/functions`);
module.exports = {
	name: "sponsor",
	category: "🔰 Info",
	aliases: ["sponsors"],
	description: "Shows the sponsor of this BoT",
	usage: "sponsor",
	type: "bot",
	run: async (client, message, args, cmduser, text, prefix) => {
		let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
		
	try{
			let embed1 = new MessageEmbed()
		    .setColor(es.color)
		    .setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable1"]))
		    .setURL("http://bero-host.de/?utm_source=bot&utm_medium=cpc&utm_id=Cybernetics")
		    .setDescription(`
Third Sponsor of This Bot is:
**BERO-HOST** THE BEST HOSTER
<:joines:992230927897997342> BERO-HOST.de is sponsoring them with some free / cheaper Hosting Methods,
<:joines:992230927897997342> Thanks to them, we are able to host our Website, Bots and GAME SERVERS
<:joines:992230927897997342> Our suggestion is, if you want to host Bots / Games / Websites, then go to [BERO-HOST.de](http://bero-host.de/?utm_source=bot&utm_medium=cpc&utm_id=Cybernetics)

**What they are offering:**
<:joines:992230927897997342> **>>** Minecraft Hosting, CounterStrike: Global Offensive, Garry's Mod, ARK, ARMA 3, ...
<:joines:992230927897997342> **>>** Cheap and fast Domains
<:joines:992230927897997342> **>>** WEBHOSTING
<:joines:992230927897997342> **>>** TEAMSPEAK SERVERS
<:joines:992230927897997342> **>>** Linux & Windows Root Servers

[**Discord Server:**](https://discord.bero-host.de)
[**Website:**](http://bero-host.de/?utm_source=bot&utm_medium=cpc&utm_id=Cybernetics)
[**__SPONSOR LINK!__**](https://cyberneticsdev.tk/img/paysafecard.png)
`)
		    .setImage("https://cdn.bero-host.de/img/logo/bero_white.png")
		    .setFooter("BERO-HOST",  "https://imgur.com/jXyDEyb?.png")
		
		let embed2 = new MessageEmbed()
			.setColor(es.color)
			.setTimestamp()
			.setFooter("Bittmax.de | Code  'x10' == -5%",  'https://imgur.com/UZo3emk.png')
			.setImage("https://cdn.discordapp.com/attachments/807985610265460766/822982640000172062/asdasdasdasdasd.png")
			.setTitle(eval(client.la[ls]["cmds"]["info"]["sponsor"]["variable4"]))
			.setURL("https://bittmax.de")
			.setDescription(`
<:joines:992230927897997342> Bittmax is providing us, like BERO-HOST with free Discord Bot-Hosting technologies

<:joines:992230927897997342> If you use the code: **\`x10\`** their, then you'll get at least 5% off everything!

<:joines:992230927897997342> Check out their [Website](https://bittmax.de) and their [Discord](https://discord.gg/GgjJZCyYKD) to get your own Bot too!`);
			swap_pages2(client, message, [embed1, embed2])
		} catch (e) {
        console.log(String(e.stack).grey.bgRed)
		return message.reply({embeds: [new MessageEmbed()
		  .setColor(es.wrongcolor)
		  .setFooter(client.getFooter(es))
		  .setTitle(client.la[ls].common.erroroccur)
		  .setDescription(eval(client.la[ls]["cmds"]["info"]["color"]["variable2"]))
		]});
    }
  }
}
/**
  * @INFO
  * Bot Coded by Radiant#1106| https://discord.cyberneticsdev.tk
  * @INFO
  * Work for Cybernetics Development | https://cyberneticsdev.tk
  * @INFO
  * Please mention him / Cybernetics Development, when using this Code!
  * @INFO
*/
