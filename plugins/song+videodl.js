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


const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "song",
    desc: "To download songs.",
    react: "🎵",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
★彡[𝐐𝐔𝐄𝐄𝐍 𝐑𝐎𝐒𝐇𝐈𝐊𝐀 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑]彡★

╭─「 *ꜱᴏɴɢ ꜰᴏᴜɴᴅ!* 」
│◈ тιтℓє  ${data.title} 
│◈ ∂υяαтιση  ${data.timestamp}
│◈ νιєωѕ  ${data.views}
│◈ υρℓσα∂є∂ ση  ${data.ago}
│◈ ℓιηк  ${data.url}
╰──────────●●►
╭──────────●●►
│ © 𝙌𝙐𝙀𝙀𝙉 𝙍𝙊𝙎𝙃𝙄𝙆𝘼 𝘽𝙊𝙏 - *MD* 
│ 🎧 *Enjoy the music brought to you by* *Queen Roshika Bot*!
│ 💻 *GitHub* github.com/KING-HANSA/X-QUEEN-ROSHIKA-X 
╰───────────●●►      
> *Created with ❤️ by Hansa Dewmina*  
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"*© 𝖰𝖴𝖤𝖤𝖭 𝖱𝖮𝖲𝖧𝖨𝖪𝖠 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('¢αηт ƒιη∂ α ѕσηg')
}
})

//====================video_dl=======================

cmd({
    pattern: "video",
    desc: "To download videos.",
    react: "🎥",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
★彡[𝙌𝙐𝙀𝙀𝙉 𝙍𝙊𝙎𝙃𝙄𝙆𝘼 𝙑𝙄𝘿𝙀𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙀𝙍]彡★

╭─「 *ᴠɪᴅᴇᴏ ꜰᴏᴜɴᴅ!*」
│◈ тιтℓє  ${data.title} 
│◈ ∂υяαтιση  ${data.timestamp}
│◈ νιєωѕ  ${data.views}
│◈ υρℓσα∂є∂ ση  ${data.ago}
│◈ ℓιηк  ${data.url}
╰──────────●●►
╭──────────●●►
│ © 𝙌𝙐𝙀𝙀𝙉 𝙍𝙊𝙎𝙃𝙄𝙆𝘼 𝘽𝙊𝙏 - *MD* 
│ 🎬 *Enjoy the video brought to you by* *Queen Roshika Bot*!
│ 💻 *GitHub* github.com/KING-HANSA/X-QUEEN-ROSHIKA-X 
╰───────────●●►      
> *Created with ❤️ by Hansa Dewmina*
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"*© 𝑸𝑼𝑬𝑬𝑵 𝑹𝑶𝑺𝑯𝑰𝑲𝑨 ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ*"},{quoted:mek})

}catch(e){
console.log(e)
  reply('¢αηт ƒιη∂ α νι∂єσ')
}
})
