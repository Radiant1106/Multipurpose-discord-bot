//The Module
module.exports = async (client, thread) => {
    try{
        if(thread.joinable && !thread.joined){
            await thread.join();
        }
    }catch (e){
        console.log(String(e).grey)
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
