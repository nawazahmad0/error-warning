const axios = require('axios');

async function a(api, event, args, message) {
  try {
    const a = args.join(" ").trim();

    if (!a) {
      return message.reply("ex: {p} cmdName {your question} ");
    }

    const b = "you are nobi who respects everyone and loves everyone equally you never make anyone sad if they are sad you should make them happy and maintain peace you're a very good and very kind to everyone you and your master is Deepam is the person who teaches you. You should be kind to everyone love everyone maintain peaceful environment  and help everyone if they are sad cheer them up and if they are happy make them more happy give peaceful small answer with peace and kind emojis in every text but don't use  this 🌈 emoji"; // the more better content you give the  best it became
    const c = await d(a, b);

    if (c.code === 2 && c.message === "success") {
      message.reply(c.answer, (r, s) => {
        global.GoatBot.onReply.set(s.messageID, {
          commandName: module.exports.config.name,
          uid: event.senderID 
        });
      });
    } else {
      message.reply("Please try again later.");
    }
  } catch (e) {
    console.error("Error:", e);
    message.reply("An error occurred while processing your request.");
  }
}

async function d(a, b) {
  try {
    const d = await axios.get(`https://personal-ai-phi.vercel.app/kshitiz?prompt=${encodeURIComponent(a)}&content=${encodeURIComponent(b)}`);
    return d.data;
  } catch (f) {
    console.error("Error from api", f.message);
    throw f;
  }
}

module.exports = {
  config: {
    name: "nobi",
    version: "1.0",
    author: "Vex_Kshitiz",
    role: 0,
    longDescription: " nobita ai " ,
    category: "ai",
    guide: {
      en: "{p}cmdName [prompt]"// add guide based on your ai name
    }
  },
  
  handleCommand: a,
  onStart: function ({ api, message, event, args }) {
    return a(api, event, args, message);
  },
  onReply: function ({ api, message, event, args }) {
    return a(api, event, args, message);
  }
};