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
const { cmd } = require('../command');

cmd({
    pattern: "trt",
    desc: "🌍 Translate text between languages",
    react: "🌐",
    category: "other",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const args = q.split(' ');
        if (args.length < 2) return reply("❗ Please provide a language code and text. Usage: .translate [language code] [text]");

        const targetLang = args[0];
        const textToTranslate = args.slice(1).join(' ');

        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=en|${targetLang}`;

        const response = await axios.get(url);
        const translation = response.data.responseData.translatedText;

        const translationMessage = `
🌍 *Translation* 🌍

🔤 *Original*: ${textToTranslate}
🔠 *Translated*: ${translation}
🌐 *Language*: ${targetLang.toUpperCase()}

> QUEEN ROSHIKA-X`;

        return reply(translationMessage);
    } catch (e) {
        console.log(e);
        return reply("⚠️ An error occurred while translating the text. Please try again later.");
    }
});
