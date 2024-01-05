var pdf = require("html-pdf");

class PdfWriter {
  
  static WritePdf(fileName, html) {
    pdf.create(html, {}).toFile(fileName, (err) => {});
  } 
}

module.exports = PdfWriter;