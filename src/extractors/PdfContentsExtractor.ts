import pdfjs = require('pdf.js-extract');
import IExtractor = require("./IExtractor");
import PdfContentsPromise = require("../promises/PdfContentsPromise");
import PdfContents = require("../models/PdfContents");

class PdfContentsExtractor implements IExtractor<PdfContentsPromise> {
	private readonly _options: Options;
	private readonly _filePath: string;
	private readonly _pdfExtract;

	constructor(filePath: string, options: Options) {
		this._filePath = filePath;
		this._options = options;
		this._pdfExtract = new pdfjs.PDFExtract();
	}

	public Extract(): Promise<PdfContentsPromise> {

		return new Promise((resolve, reject) => {

			this._pdfExtract.extract(this._filePath, this._options, (err, data) => {

				let promiseResponse: PdfContentsPromise = new PdfContentsPromise();

				if (err) {
					reject(err);
				}

				let pdfContents: PdfContents = new PdfContents();
				let fullText = "";
				data.pages.map(page => { page.content.map(item => { fullText += item.str }) });

				pdfContents.Contents = fullText;

				promiseResponse.ResolveResult = pdfContents;
				resolve(promiseResponse);
			});
		});
	}
}

class Options {
	Password: string;
}

export = { PdfContentsExtractor, Options };