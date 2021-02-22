const metadata = {
	name: 'logger',
};

export interface LoggerApi {
	logger: {
		err: () => void;
	};
}

export default function Logger(bot: LoggerApi): void {
	function err() {
		console.log('do the thing');
	}

	bot.logger = { err };
}

Logger.metadata = metadata;
