const fs = require('fs').promises;

async function renomearArquivo(arquivoAntigo, novoNome){
    try{
        await fs.rename(arquivoAntigo, novoNome)
    }catch (erro){
        console.log(erro)
    }
}

exports.renomearArquivo = renomearArquivo;