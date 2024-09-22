const fs = require('fs').promises

async function moverArquivo(origem, destino){
    try{
        await fs.copyFile(origem, destino)

        await fs.unlink(origem)
    }catch (erro){
        console.log(erro)
    }
}

exports.moverArquivo = moverArquivo;