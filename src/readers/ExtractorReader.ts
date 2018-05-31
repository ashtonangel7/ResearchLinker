import IReader = require("./IReader");
import IExtractor = require("../extractors/IExtractor");

class ExtractorReader<TRead> implements IReader<TRead> {
	private readonly _extractor: IExtractor<TRead>;

	constructor(extractor: IExtractor<TRead>) {
		//Potentially transform data.
		this._extractor = extractor;
	}
	Read(): Promise<TRead> {
		return new Promise((resolve, reject) => {
			this._extractor.Extract().then(result => {
				resolve(result);
			}).catch(error => {
				reject(error);
			});
		});
	}
}

export = ExtractorReader;