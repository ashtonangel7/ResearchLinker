import fileSystem = require('fs');
import IReader = require("./IReader");

class DirectoryReader implements IReader<string[]> {
	private readonly _directoryPath: string;

	constructor(directoryPath: string) {
		this._directoryPath = directoryPath;
	}
	Read(): Promise<string[]> {
		return new Promise((resolve, reject) => {
			try {
				fileSystem.readdir(this._directoryPath, (error, files) => {
					if (error) {
						reject(error);
						return;
					}
					//TODO: Use formatter to format file paths.
					resolve(files);
				});
			} catch (error) {
				reject(error);
			}
		});
	}

}

export = DirectoryReader;