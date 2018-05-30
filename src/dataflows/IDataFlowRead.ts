import IPromiseResponse = require("../promises/IPromiseResponse");
import Content = require("../models/Content");

interface IDataFlowRead {
	Read(): Promise<IPromiseResponse<Content>>;
}

export = IDataFlowRead;