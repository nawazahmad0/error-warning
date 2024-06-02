module.exports = {
    config: {
        name: "listban",
        aliases: ["banlist", "banned"],
        version: "2.0",
        author: "RUBISH",
        cooldowns: 5,
        role: 2,
        shortDescription: "See a list of banned groups/users",
        longDescription: "See a list of banned groups/users",
        category: "owner",
        guide:  {en: "{pn} <user|thread> <page number>"},
    },
    onStart: async function ({ message, args, usersData, threadsData }) {
        const pageLimit = 20;
        const pageNum = parseInt(args[1]) || 1;

        if (!args[0] || args[0] === "user" || args[0] === "-u") {
            const bannedUsers = await usersData.getAll();
            const bannedList = bannedUsers.filter(item => item.banned && item.banned.status);

            const startIndex = (pageNum - 1) * pageLimit;
            const endIndex = Math.min(startIndex + pageLimit, bannedList.length);

            const msg = bannedList.slice(startIndex, endIndex).reduce((accumulator, item, index) => accumulator +=
                
                `${startIndex + index + 1} 》${item.name}\n` +
                `UID:➠ ${item.userID}\n` +
                `Reason:➠ ${item.banned.reason}\n` +
                `Time:➠ ${item.banned.date}\n\n`, "");

            const totalPages = Math.ceil(bannedList.length / pageLimit);

            message.reply(msg ? `
✅ | Currently ${bannedList.length} users have been banned from bot server
______________________________

${msg}
______________________________
                  Page ${pageNum} / ${totalPages}` : "No users are currently banned from using bots");
        } else if (args[0] === "thread" || args[0] === "-t") {
            const bannedThreads = await threadsData.getAll();
            const bannedList = bannedThreads.filter(item => item.banned && item.banned.status);

            const startIndex = (pageNum - 1) * pageLimit;
            const endIndex = Math.min(startIndex + pageLimit, bannedList.length);

            const msg = bannedList.slice(startIndex, endIndex).reduce((accumulator, item, index) => accumulator +=
                `${startIndex + index + 1} 》${item.threadName || "N/A"}\n` +
                `TID:➠ ${item.threadID || "N/A"}\n` +
                `Reason:➠ ${item.banned.reason}\n` +
                `Time:➠ ${item.banned.date}\n\n`, "");

            const totalPages = Math.ceil(bannedList.length / pageLimit);

            message.reply(msg ? `
✅ | Currently ${bannedList.length} threads have been banned from bot Server 
______________________________

${msg}
______________________________
                  Page ${pageNum} / ${totalPages}` : "No threads are currently banned from using bots");
        } else {
            return message.SyntaxError();
        }
    }
};