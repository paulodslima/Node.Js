const fs = require('fs').promises;

async function excluirArquivo(arquivo){
    try{
        await fs.access(arquivo);

        await fs.unlink(arquivo)
    }catch (erro){
        console.log("O arquivo não podê ser acessado ou não foi encontrado.")
    }
}

exports.excluirArquivo = excluirArquivo;