/**
 ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗    ██████╗  ██████╗ ███████╗██╗  ██╗██╗██╗  ██╗ █████╗     ██╗  ██╗
██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║    ██╔══██╗██╔═══██╗██╔════╝██║  ██║██║██║ ██╔╝██╔══██╗    ╚██╗██╔╝
██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║    ██████╔╝██║   ██║███████╗███████║██║█████╔╝ ███████║     ╚███╔╝ 
██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║    ██╔══██╗██║   ██║╚════██║██╔══██║██║██╔═██╗ ██╔══██║     ██╔██╗ 
╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║    ██║  ██║╚██████╔╝███████║██║  ██║██║██║  ██╗██║  ██║    ██╔╝ ██╗
 ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝    ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚═╝  ╚═╝    ╚═╝  ╚═╝
         
* Project name - QUEEN ROSHIKA X 
* Author - Hansa Dewmina
* Team - Dewminacoders 
* Version - vX

World best and powerfull whatsapp user bot in Sri lanka*/


const axios = require('axios');
const { cmd, commands } = require('../command');

cmd({
pattern: "pussy",
desc: "Gets pussy pics.",
category: "18+",
react: "💃",
filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
try {
const apiUrl = `https://api.maher-zubair.tech/nsfw/pussy`;
const response = await axios.get(apiUrl);
const data = response.data;

await conn.sendMessage(from, { image: { url: data.url }, caption: '👧 *Random Anime Girl Image* 👧\n> QUEEN ROSHIKA-MD' }, { quoted: mek });
} catch (e) {
console.log(e);
reply(`Error fetching anime girl image: ${e.message}`);
}
});
