import { LoggerApi } from '@baymax-dev/logger';

const metadata = {
	name: 'http',
	needs: [
		'logger',
	],
};

interface HttpApi {
	http: {};
}

export default function Http(bot: HttpApi & LoggerApi): void {
	bot.http = {};
}

Http.metadata = metadata;
