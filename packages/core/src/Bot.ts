interface Plugin {
	(): void;
	metadata: {
		name: string;
		needs?: string[];
	};
}

export default class Bot {
	api = {};

	plugins: Plugin[] = [];

	// constructor() {
	// 	this.plugins = [];
	// 	this.api = {};
	// }

	use(plugin: Plugin): void {
		console.log('PLUGIN', plugin);
		console.log(plugin.metadata.name);
		// if (typeof plugin !== 'function') {
		// 	throw new Error('EVE plugins need to be functions');
		// }

		if (plugin.metadata.needs) {
			console.log('check dependencies');
		}

		this.plugins.push(plugin);
	}

	async boot(): Promise<void> {
		console.info('do boot things', this.plugins);
		// return new Promise((resolve, reject) => {
		// 	const plugins = [...this.plugins];
		// 	const next = async () => {
		// 		const plugin = plugins.shift();
		// 		if (!plugin) return resolve();

		// 		try {
		// 			const promise = plugin(this.api);
		// 			if (!promise || !promise.then) return next();

		// 			await promise;
		// 			next();
		// 		} catch (err) {
		// 			reject(err);
		// 		}
		// 	};

		// 	next();
		// });
	}
}
