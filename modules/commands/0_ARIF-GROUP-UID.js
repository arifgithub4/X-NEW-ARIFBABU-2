module.exports.config = {
	name: "gid",	
  version: "1.0.0", 
	hasPermssion: 0,
	credits: "ARIF BABU",
	description: "THIS BOT IS MADE BY ARIF BABU", 
	commandCategory: "GROUP UID",
	usages: "GID",
	cooldowns: 5, 
	dependencies: '',
};

module.exports.run = async function({ api, event }) {
  api.sendMessage(""+event.threadID, event.threadID, event.messageID);
};
