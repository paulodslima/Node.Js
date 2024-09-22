const fs = require('fs').promises;

async function excluirDiretorio(diretorio){
    try{
        await fs.access(diretorio)
        
        await fs.rmdir(diretorio)
    }catch (erro){
        console.log("Não foi possível encontrar a pasta para excluir.")
    }
}

exports.excluirDiretorio = excluirDiretorio;