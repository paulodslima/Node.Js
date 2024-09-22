const fs = require('fs').promises

async function verificarStats(caminho){
    try{
        let stats = await fs.stat(caminho)
        //console.log(stats)
        return stats
    }catch (erro){
        console.log(erro)
    }
}

exports.verificarStats = verificarStats;