console.log('might be one of us');

require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

const heyReply = ['heyy', 'whats up', 'spil the bin', 'how you doin', 'i missed you man'];

client.on('ready', () => {
	console.log(`Logged in!`);
});

client.on('message', (msg) => {
	if (msg.content === 'wubba lubba') {
		msg.channel.send('Dub Dub');
	}
	if (
		msg.content === 'hey akshar' ||
		msg.content === 'hello akshar' ||
		msg.content === 'hi akshar' ||
		msg.content === 'sup akshar'
	) {
		const index = Math.floor(Math.random() * 5);
		msg.reply(heyReply[index]);
	}
	if (msg.content === 'who are you') {
		msg.channel.send('I am akshar and I love you');
	}
});
