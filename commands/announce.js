
exports.run = (client, message, args) => {
	if(message.group) {
  Storage.setItemSync("updateGroup", message.group.id);
  message.reply(`💠 This group Token: [${message.group.id}] will now recieve war updates`);
}
}

exports.description = "1.Enables war updates for a group 'announce'"
