import pdfjs = require("pdf.js-extract");
import IExtractor = require("./IExtractor");
import PdfContents = require("../models/PdfContents");
import IPromiseResponse = require("../promises/IPromiseResponse");
import PdfContentsPromise = require("../promises/PdfContentsPromise");

class PdfContentsExtractor implements IExtractor<IPromiseResponse<PdfContents>> {
	private readonly _options: Options;
	private readonly _filePaths: string[];
	private readonly _pdfExtract;

	constructor(filePaths: string[], options: Options) {
		this._filePaths = filePaths;
		this._options = options;
		this._pdfExtract = new pdfjs.PDFExtract();
	}

	public Extract(): Promise<IPromiseResponse<PdfContents>> {

		return new Promise((resolve, reject) => {

			try {

				//throw new TypeError("Testing Try Catch!");
				//TODO: Handle file array.
				this._pdfExtract.extract(this._filePaths[0], this._options, (error, data) => {

					let promiseResponse: IPromiseResponse<PdfContents> = new PdfContentsPromise();

					if (error) {
						reject(error);
						return;
					}

					let pdfContents: PdfContents = new PdfContents();
					let fullText = "";
					data.pages.map(page => { page.content.map(item => { fullText += item.str }) });

					pdfContents.Contents = fullText;

					promiseResponse.ResolveResult = pdfContents;
					resolve(promiseResponse);
				});
			}
			catch (error) {
				//Note this will swallow the stack.
				reject((<Error>error).message);
			}
		});
	}
}

class Options {
	Password: string;
}

export = { PdfContentsExtractor, Options };