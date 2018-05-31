import DirectoryReader = require("./readers/DirectoryReader");

import ExtractorReader = require("./readers/ExtractorReader");
import PdfContentsExtractor = require("./extractors/PdfContentsExtractor");
import IPromiseResponse = require("./promises/IPromiseResponse");
import PdfContents = require("./models/PdfContents");

let path: string = "C:\\ProgramData\\ResearchLinker\\Data\\";

let directoryReader = new DirectoryReader(path);

directoryReader.Read().then(result => {

	let options = new PdfContentsExtractor.Options();

	let pdfContentsExtractor = new PdfContentsExtractor.PdfContentsExtractor(result, options);
	let pdfContentReader = new ExtractorReader<IPromiseResponse<PdfContents>>(pdfContentsExtractor);

	pdfContentReader.Read().then(result => {
		console.log(result.ResolveResult.Contents);
	}).catch(error => {
		console.log(`Error ${error}`);
	});

}).catch(error => {
	console.log(error);
});







