import DataFlow = require("./dataflows/DataFlow");
import ContentReader = require("./dataflows/readers/ContentReader");
import PdfContentsExtractor = require("./extractors/PdfContentsExtractor");

let path: string = "C:\\ProgramData\\ResearchLinker\\Data\\1.pdf";
let options = new PdfContentsExtractor.Options();

let pdfContentsExtractor = new PdfContentsExtractor.PdfContentsExtractor(path, options);
let contentReader = new ContentReader(pdfContentsExtractor);
let dataFlow = new DataFlow(contentReader);

dataFlow.Read().then(result => {
	console.log(result.ResolveResult.Contents);
}).catch(error => {
	console.log(`Error $(error)`);
});




