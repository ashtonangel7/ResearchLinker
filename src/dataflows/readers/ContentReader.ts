import IContentReader = require("./IContentReader");
import IExtractor = require("../../extractors/IExtractor");
import IPromiseResponse = require("../../promises/IPromiseResponse");
import Content = require("../../models/Content");

class ContentReader implements IContentReader {
	private readonly _extractor: IExtractor<IPromiseResponse<Content>>;

	constructor(extractor: IExtractor<IPromiseResponse<Content>>) {
		//Potentially transform data.
		this._extractor = extractor;
	}
	Read(): Promise<IPromiseResponse<Content>> {
		return new Promise((resolve, reject) => {
			this._extractor.Extract().then(result => {
				resolve(result);
			}).catch(error => {
				reject(error);
			});
		});
	}
}

export = ContentReader;