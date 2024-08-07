const fs = require("fs");
module.exports = {
config:{
name: "owner",
version: "1.0.1",
role: 0,
author: "NAWAZ AHMAD", 
shortDescription: "noprefx",
longdescription: "noprefix",
category: "admin",
guide: "🥰",
countDown: 5, 
},

onChat: async function({ api, event, client, __GLOBAL }) {
var { threadID, messageID } = event;
const content = event.body ? event.body : '';
const body = content.toLowerCase();
const axios = require('axios')
const media = (
await axios.get(
'https://i.imgur.com/Pm6bWEs.jpeg',
{ responseType: 'stream' }
)
).data;

if (body.indexOf("owner")==0 || body.indexOf("Owner")==0) {
var msg = {
body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★\n\n✦❏𝗡𝗔𝗠𝗘:- 🦋⃝𓆩̬𝐍ɑ͜͡𝘄ɑ͜͡𝐳𓆪᭄___🩷🪽\n\n ❏𝗔𝗚𝗘:-AGE DOENS'T MATTTER IN LOVE 💋\n\n❏𝗤𝗨𝗔𝗟𝗜𝗙𝗜𝗖𝗔𝗧𝗜𝗢𝗡:- OPSS SORRY😁\n\n❏𝗛𝗢𝗕𝗕𝗬:- 𝗕𝗲𝗶𝗻𝗴 𝗮 𝗴𝗼𝗼𝗱 𝗺𝗮𝗻 𝗮 𝗴𝗼𝗼𝗱 𝗳𝗮𝘁𝗵𝗲𝗿 𝗮𝗻𝗱 𝗮 𝗴𝗼𝗼𝗱 𝗵𝘂𝘀𝗯𝗮𝗻𝗱\n\n ❏𝗪𝗛𝗔𝗧𝗦 𝗔𝗣𝗣 𝗡𝗢:-Ooops! Forgot😵 \n\n❏𝗜𝗡 𝗔 𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡𝗦𝗛𝗜𝗣 𝗪𝗜𝗧𝗛 :-Ye bat baatayi nahi jaati😒najar lag jati hai \n\n❏𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗡𝗔𝗠𝗘/𝗜𝗗 𝗟𝗜𝗡𝗞 :-https://www.facebook.com/itznawaz007 \n\n❏𝗕𝗢𝗧 𝗡𝗔𝗠𝗘:- 𒁍⃝𓆩̬ᴩʀɪᴍᴇ 🦋⃝ᴍɪɴɪꜱᴛᴇʀ𓆪᭄___🩷🪽 \\n\n❏𝗛𝗮𝘁𝗲𝗿𝘀 𝗮𝗿𝗲 𝗺𝘆 𝗺𝗼𝘁𝗶𝘃𝗮𝘁𝗼𝗿𝘀😹✦\n\n☞\n\n★★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 : 🦋⃝𓆩̬𝐍ɑ͜͡𝘄ɑ͜͡𝐳𓆪᭄___🩷🪽`",
attachment: media
}
api.sendMessage( msg, threadID, messageID);
api.setMessageReaction("👑", event.messageID, (err) => {}, true)
}
},
onStart: function({}) {
}
  }
