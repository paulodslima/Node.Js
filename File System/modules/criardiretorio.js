const fs = require('fs').promises;

async function criarDiretorio(diretorio){
    try{
        await fs.mkdir(diretorio)
    }catch (erro){
        console.log(erro)
    }
}

exports.criarDiretorio = criarDiretorio;