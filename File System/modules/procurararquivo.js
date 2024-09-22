const fs = require('fs').promises;
const path = require('path')

async function procurarArquivo (caminho, nomeArquivo){
    try{
        let arquivos = await fs.readdir(caminho);
        //console.log(arquivos)
        let arquivoEncontrado = null
        arquivos.forEach(arquivo => { if(arquivo.includes(nomeArquivo)) arquivoEncontrado = path.resolve(caminho, arquivo) })
        //console.log(nomeArquivo)
        if(arquivoEncontrado) return arquivoEncontrado
        throw new Error(`Arquivo '${nomeArquivo}' não encontrado.`);
    }catch (erro) {
        console.error(erro)
    }
}

exports.procurarArquivo = procurarArquivo;