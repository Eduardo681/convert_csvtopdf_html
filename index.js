const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HTMLParser = require("./HTMLParser");
const Writer = require("./Writer");
const PDFWriter = require("./PDFWriter");
const leitor = new Reader();
const escritor = new Writer();
async function main(){
    let dados = await leitor.Read("./dados.csv");
    let dadosProcessados = Processor.Process(dados);
    let usuarios = new Table(dadosProcessados);
    let html = await HTMLParser.Parse(usuarios);
    escritor.Write(Date.now()+".html",html);
    PDFWriter.WritePDF(Date.now()+".PDF",html);
}

main();