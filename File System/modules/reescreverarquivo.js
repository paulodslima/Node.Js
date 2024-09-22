const fs = require('fs').promises;

async function reescreverArquivo(arquivo, conteudo){
    try{
        await fs.writeFile(arquivo, conteudo)
    }catch (erro){
        console.log(erro)
    }
}

exports.reescreverArquivo = reescreverArquivo;