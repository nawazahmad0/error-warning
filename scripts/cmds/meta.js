const axios = require('axios');
const fs = require('fs-extra');
module.exports={
config:{
  name: "meta",
    aliases: ["img5"],
    version: "6.9.0",
    author: "dipto",
    countDown: 15,
    role: 0,
    shortDescription: "photo genarate",
    longDescription: "Photo genarate from meta ai",
    category: "imagination",
    guide: {
      en: "{pn} [prompt]"
    }
},
onStart:async function ({ args, event, api }) {
  try {
    const prompt = args.join(" ");
    const wait = await api.sendMessage("𝗪𝗮𝗶𝘁 𝗸𝗼𝗿𝗼 𝗕𝗮𝗯𝘆 <😘", event.threadID);
    const response = await axios.get(`https://noobs-api.onrender.com/dipto/meta?prompt=${encodeURIComponent(prompt)}&key=dipto008`);
    const data = response.data.imgUrls;
    if (!data || data.length === 0) {
      return api.sendMessage("Empty response or no images generated.",event.threadID,event.messageID);
    }
    const imgData = [];
    for (let i = 0; i < data.length; i++) {
      const imgUrl = data[i];
      const imgResponse = await axios.get(imgUrl, { responseType: 'arraybuffer' });
      const imgPath = (__dirname +`/cache/${i + 1}.jpg`);
      await fs.outputFile(imgPath, imgResponse.data);
      imgData.push(fs.createReadStream(imgPath));
    }
     await api.unsendMessage(wait.messageID);
    await api.sendMessage({
      body: `✅ | Generated your images`,
      attachment: imgData
    }, event.threadID ,event.messageID);
for (const imgPath of imgData) {
       fs.unlink(imgPath);
}
  } catch (e) {
    console.error(e);
    await api.sendMessage(`Failed to genarate photo!!!!\nerror: ${e.message}`, event.threadID);
  }
}
};
