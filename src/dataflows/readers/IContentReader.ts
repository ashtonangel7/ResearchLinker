import IPromiseResponse = require("../../promises/IPromiseResponse");
import Content = require("../../models/Content");

interface IContentReader {
	Read(): Promise<IPromiseResponse<Content>>;
}

export = IContentReader;