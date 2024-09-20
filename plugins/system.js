const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "To Check uptime , ram and more.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let status = `
🏷️ SYSTEM STATUS

╭─「 *ꜱʏꜱᴛᴇᴍ ꜱᴛᴀᴛᴜꜱ* 」
│◈ υρтιмє  ${runtime(process.uptime())} 
│◈ яαм υѕαgє  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
│◈ нσѕт ηαмє  ${os.hostname()}
│◈ вσт σωηєя  HANSA DEWMINA
╰──────────●●►
╭──────────●●►
│ © *𝙌𝙐𝙀𝙀𝙉 𝙍𝙊𝙎𝙃𝙄𝙆𝘼 𝘽𝙊𝙏 - MD * 
│ 💻 GitHub:* github.com/DEWMINA-HD/QUEEN-ROSHIKA 
╰───────────●●►      
`
return reply(`${status}`)
}catch(e){
console.log(e)
reply(`${e}`)

}
})


cmd({
    pattern: "runtime",
    alias: ["uptime"],
    desc: "To Check uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let status = `😇𝚁𝚄𝙽𝚃𝙸𝙼𝙴😇:  ${runtime(process.uptime())}`


return reply(`${status}`)
}catch(e){
console.log(e)
reply(`${e}`)

}
})

