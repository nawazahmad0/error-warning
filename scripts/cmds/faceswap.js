module.exports = {
  config: {
    name: "faceswap",
    aliases: ["swap", "exchange"],
    version: "1.0",
    author: 'Samir Œ',
    shortDescription: "Swap faces in two images",
    longDescription: "Swap faces in two images provided as attachments.",
    category: "𝗙𝗨𝗡"
  },

  onStart: async function({ message, event, api }) {
    try {
      if (event.type != "message_reply") {
        return message.reply("Please reply to a message with two images attached.");
      }

      let links = [];
      for (let attachment of event.messageReply.attachments) {
        links.push(attachment.url);
      }

      if (links.length < 2) {
        return message.reply("Please ensure there are exactly two images attached.");
      }

      const shortLink1 = await global.utils.uploadImgbb(links[0]);
      const Url1 = shortLink1.image.url;

      const shortLink2 = await global.utils.uploadImgbb(links[1]);
      const Url2 = shortLink2.image.url;

      let swapface = `https://rubish-apihub.onrender.com/rubish/faceswap?target=https://i.ibb.co/1dFvfMT/image.jpg&mask=https://i.ibb.co/SX5tJQc/image.jpg&apikey=rubish69`;
      const stream = await global.utils.getStreamFromURL(swapface);
      message.reply({ body: "", attachment: stream });
    } catch (error) {
      console.error(error);
      message.reply("An error occurred while processing the face swap.");
    }
  }
};
