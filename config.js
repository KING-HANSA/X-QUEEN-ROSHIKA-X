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
                                                                                                       

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/FKN3bv38/20240919-134939.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLOW THEIR, QUEEN ROSHIKA IS ALIVE...\n\nOWNER: HANSA DEWMINA\n\nTHANKS FOR USING QUEEN ROSHIKA MD\n\n> *© Qᴜᴇᴇɴ ʀᴏꜱʜɪᴋᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*/n/n*> ɢɪᴛʜᴜʙ :* github.com/DEWMINA-HD/QUEEN-ROSHIKA",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
BOT_NUMBER: process.env.BOT_NUMBER || "94701515609",
OWNER_REACT: process.env.OWNER_REACT || "🔗",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE:"true",
AUTO_STICKER:"true",
AUTO_REPLY:"true"
};

