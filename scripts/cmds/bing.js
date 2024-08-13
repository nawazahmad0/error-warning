const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const baseApiUrl = async () => {
  const base = await axios.get(`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`);
  return base.data.api;
}; 

module.exports = {
  config: {
    name: "dalle",
    aliases: ["dalle","bing","create"],
    version: "1.0",
    author: "Dipto",
    countDown: 15,
    role: 0,
    description: "Generate images powerby by Dalle3",
    longDescription: "Generate images by Unofficial Dalle3",
    category: "download",
    guide: {
      en: "{pn} prompt"
    }
  },

  onStart: async function ({ api, event, args }) {
  const prompt = event.messageReply?.body.split("dalle")[1] ||  args.join(" ");
  if (!prompt) {
   return api.sendMessage("❌| Wrong Formet .✅ | Use 17/18 years old boy/girl watching football match on tv and written Dipto and 69 on the back of his Dress , 4k",event.threadID,event.messageID);
  }
    try {
const tl = ["1MQW-3n4dctBLgBFZpw09kHuvctQ1DBhH5AGDc97fxbC61Y-QxN75tVIyz8AqbqtO5aofzfj1bNlIheorVOtx_c375tXXQtwkS0ESXhwtdYuKSV8zLEvDrP-vbqOxi_IWrFBIS5VEOLrgF_uxJa0xfO1EX6dN1EQsqhcWY798Wh3h8fyw0X_t0NM74RST5LydSb3335USF_N0DhFDqJ_QOg ","1MQW-3n4dctBLgBFZpw09kHuvctQ1DBhH5AGDc97fxbC61Y-QxN75tVIyz8AqbqtO5aofzfj1bNlIheorVOtx_c375tXXQtwkS0ESXhwtdYuKSV8zLEvDrP-vbqOxi_IWrFBIS5VEOLrgF_uxJa0xfO1EX6dN1EQsqhcWY798Wh3h8fyw0X_t0NM74RST5LydSb3335USF_N0DhFDqJ_QOg"];
const cookies = tl[Math.floor(Math.random() * tl.length)];
      const w = await api.sendMessage("Wait koro baby < 😽", event.threadID);
  
const response = await axios.get(`${await baseApiUrl()}/dalle?prompt=${prompt}&key=dipto008&cookie=${cookies}`)
      const data = response.data.imgUrls;
      if (!data || data.length === 0) {
        api.sendMessage("Empty response or no images generated.",event.threadID,event.messageID);
      }
      const diptoo = [];
      for (let i = 0; i < data.length; i++) {
        const imgUrl = data[i];
        const imgResponse = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        const imgPath = path.join(__dirname, 'cache', `${i + 1}.jpg`);
        await fs.outputFile(imgPath, imgResponse.data);
        diptoo.push(fs.createReadStream(imgPath));
      }
      await api.unsendMessage(w.messageID);
      await api.sendMessage({
  body: `✅ |Naw Baby Tumar Generated Pic<😘`,
        attachment: diptoo
      },event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      await api.sendMessage(`Generation failed!\nError: ${error.message}`,event.threadID, event.messageID);
    }
  }
}