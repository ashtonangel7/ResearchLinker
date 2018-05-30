import IDataFlowRead = require("./IDataFlowRead");
import IContentReader = require("./readers/IContentReader");
import IPromiseResponse = require("../promises/IPromiseResponse");
import Content = require("../models/Content");

class DataFlow implements IDataFlowRead {
	private readonly _reader: IContentReader;

	constructor(reader: IContentReader) {
		this._reader = reader;
	}
	Read(): Promise<IPromiseResponse<Content>> {
		return new Promise((resolve, reject) => {
			this._reader.Read().then(result => {
				resolve(result);
			}).catch(error => {
				reject(error);
			});
		});
	}
}

export = DataFlow;