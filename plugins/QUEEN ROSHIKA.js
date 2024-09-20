const {cmd , commands} = require('../command')

cmd({
    pattern: "roshika",
    desc: "wallpaper the bot",
    category: "main",
    react: "🧚‍♀️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `❮❮ 🧚‍♀️ QUEEN ROSHIKA X WALLPEPAR 🧚‍♀️ ❯❯`
await conn.sendMessage(from,{image:{url: `https://i.postimg.cc/FKN3bv38/20240919-134939.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/0b7ed7ffffb3380536340.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/0b7ed7ffffb3380536340.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://i.postimg.cc/FKN3bv38/20240919-134939.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
