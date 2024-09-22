const fs = require('fs').promises;

async function lerArquivo(arquivo){
    try{
        let conteudo = await fs.readFile(arquivo, 'utf8')
        return conteudo
    }catch (erro) {
        console.error("Erro:", erro)
    }
}

exports.lerArquivo = lerArquivo;