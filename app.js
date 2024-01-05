var Reader = require("./Reader");
var Write = require("./Writer");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParse = require("./HtmlParser");
var PdfWriter = require("./PdfWriter"); 

var leitor = new Reader();
var escritor = new Write();

async function main() {
  var dados = await leitor.Read("./users.csv");
  var dadosProcessados = Processor.Process(dados);

  var usuarios = new Table(dadosProcessados);

  var html = await HtmlParse.Parse(usuarios);

  escritor.Write(`${Date.now()}.html`, html);
  PdfWriter.WritePdf(`${Date.now()}.pdf`, html);
}

main();