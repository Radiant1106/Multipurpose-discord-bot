var {
  MessageEmbed
} = require(`discord.js`);
var Discord = require(`discord.js`);
var config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
var emoji = require(`${process.cwd()}/botconfig/emojis.json`);
var {
  databasing
} = require(`${process.cwd()}/handlers/functions`);
const { MessageButton, MessageActionRow, MessageSelectMenu } = require('discord.js')
module.exports = {
  name: "setup-boost",
  category: "💪 Setup",
  aliases: ["setupboost", "boostsetup"],
  cooldown: 5,
  usage: "setup-boost <Message/disable>",
  description: "Send a Boost 'Thank you' Message in the dm of a booster",
  memberpermissions: ["ADMINISTRATOR"],
  type: "system",
  run: async (client, message, args, cmduser, text, prefix) => {
    
    let es = client.settings.get(message.guild.id, "embed");
    let ls = client.settings.get(message.guild.id, "language")
    
    try {
      client.settings.ensure(message.guild.id, {
        boost: {
          enabled: false,
          message: "",
          log: false,
          stopBoost: "<a:booster:997547380675199026> {member} **stopped Boosting us..** <:Cat_Sad:997548087520268348>",
          startBoost: "<a:booster:997547380675199026> {member} **has boosted us!** <a:Light_Saber_Dancce:997548488055341069>",
          againBoost: "<a:booster:997547380675199026> {member} **has boosted us again!** <:Tada_WON:997548792234647705>",
        }
      })

      if(!args[0]) return message.reply("Usage: setup-boost <Message/disable>");
      if(args[0].toLowerCase() == "disable") {
        client.settings.set(message.guild.id, false, "boost.enabled")
        message.reply("Disabled the boost messages");
      }
      else {
        message.reply(`I will send a dm to each user if they boost this server with this message:\n${args.join(" ")}`.substring(0, 2000));
        client.settings.set(message.guild.id, true, "boost.enabled")
        client.settings.set(message.guild.id, args.join(" "), "boost.message")
      }
      
    } catch (e) {
      console.log(String(e.stack).grey.bgRed)
      return message.reply({embeds: [new MessageEmbed()
        .setColor(es.wrongcolor).setFooter(client.getFooter(es))
        .setTitle(client.la[ls].common.erroroccur)
        .setDescription(`\`\`\`${String(JSON.stringify(e)).substring(0, 2000)}\`\`\``)
      ]});
    }
  },
};
/**
 * @INFO
 * Bot Coded by Radiant#1106| https://discord.cyberneticsdev.tk
 * @INFO
 * Work for Cybernetics Development | https://cyberneticsdev.tk
 * @INFO
 * Please mention him / Cybernetics Development, when using this Code!
 * @INFO
 */