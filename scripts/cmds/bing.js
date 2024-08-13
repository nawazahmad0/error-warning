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
    aliases: ["bing","create","imagine"],
    version: "1.0",
    author: "Dipto",
    countDown: 15,
    role: 0,
    shortDescription: "Generate images powerby by Dalle3",
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
      const fff = 19T1qFhba9dq98ePlVz4CfY3lED_f9U3FC9Opy8ogP1Bktk5zBAHBgdp_gW6OBn_hEgUt_ccmRlNvWCf7dsPAMZ43Nl-tJve2_bqzbjm19tCYn0ZOdod9usycNCVXSAn-Ci6nFvB_tBNTXeJpCdqHT24WNVfi2SV5IQhbVrZ0Y7EV-oXb_dQ7MeB_Gq1ocBoYnNBlJGTixh707wdLHMx2Mg", "19T1qFhba9dq98ePlVz4CfY3lED_f9U3FC9Opy8ogP1Bktk5zBAHBgdp_gW6OBn_hEgUt_ccmRlNvWCf7dsPAMZ43Nl-tJve2_bqzbjm19tCYn0ZOdod9usycNCVXSAn-Ci6nFvB_tBNTXeJpCdqHT24WNVfi2SV5IQhbVrZ0Y7EV-oXb_dQ7MeB_Gq1ocBoYnNBlJGTixh707wdLHMx2Mg"]
        const col = fff[Math.floor(Math.random() * fff.length)]
      const w = await api.sendMessage("Wait koro baby < 😽", event.threadID);
  
const response = await axios.get(`${await baseApiUrl()}/dalle?prompt=${prompt}&key=dipto008&cookies=${col}`)
      var data = response.data.imgUrls;
      if (!data || data.length === 0) {
        api.sendMessage("Empty response or no images generated.",event.threadID,event.messageID);
      }
      const diptoo = [];
      for (let i = 0; i < data.length; i++) {
        const imgUrl = data[i];
        const imgResponse = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        const imgPath = path.join(__dirname, 'dvassests', `${i + 1}.jpg`);
        await fs.outputFile(imgPath, imgResponse.data);
        diptoo.push(fs.createReadStream(imgPath));
      }
      await api.unsendMessage(w.messageID);
      await api.sendMessage({
  body: `✅ | Here's Your Generated Photo<😘`,
        attachment: diptoo
      },event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      await api.sendMessage(`Generation failed!\nError: ${error.message}`,event.threadID, event.messageID);
    } finally {
      for (let ii; ii < data.length; ii++){
           fs.unlinkSync(__dirname, 'dvassests', `${i + 1}.jpg`);
      }
    }
  }
}