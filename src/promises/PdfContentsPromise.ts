import IPromiseResponse = require("./IPromiseResponse");
import PdfContents = require("../models/PdfContents");

class PdfContentsPromise implements IPromiseResponse<PdfContents> {
	ResolveResult: PdfContents;
}

export = PdfContentsPromise;