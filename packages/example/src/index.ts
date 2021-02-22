import { Bot } from '@baymax-dev/core';

function MyPlugin() {
	console.log('setup!');
}

MyPlugin.metadata = {
	name: 'my-plugin',
};

const bot = new Bot();
bot.use(MyPlugin);

bot.boot();
