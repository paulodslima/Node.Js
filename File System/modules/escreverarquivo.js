const fs = require('fs').promises;

async function escreverArquivo(arquivo, conteudo){
    try{
        await fs.appendFile(arquivo, conteudo)
    }catch (erro){
        console.log(erro)
    }
}

exports.escreverArquivo = escreverArquivo;