const fs = require('fs').promises;

async function listarDiretorio(diretorio){
    try{
        await fs.access(diretorio)

        let resultado = await fs.readdir(diretorio)
        resultado.forEach((arquivo) => console.log(arquivo))
    }catch (erro){
        console.log("não possível listar o diretorio", erro)
    }
}

exports.listarDiretorio = listarDiretorio;