const fs = require('fs').promises;
const { lerArquivo } = require("./modules/lerarquivo.js");
const { procurarArquivo } = require("./modules/procurararquivo.js");
const { reescreverArquivo } = require('./modules/reescreverarquivo.js');
const { escreverArquivo } = require('./modules/escreverarquivo.js');
const { renomearArquivo } = require('./modules/renomeararquivo.js');
const { excluirArquivo } = require('./modules/excluirarquivo.js');
const { criarDiretorio } = require('./modules/criardiretorio.js');
const { excluirDiretorio } = require('./modules/excluirdiretorio.js');
const { listarDiretorio } = require('./modules/listardiretorio.js');
const { verificarStats } = require('./modules/verificastats.js');
const { moverArquivo } = require('./modules/moverarquivo.js');


const path = require('path');
const caminho = path.resolve(__dirname, 'testes');


(async () => {
    try {

        //Procura arquivo
        let nomeArquivo = 'teste';
        let arquivoParaLer = await procurarArquivo(caminho, nomeArquivo);
        console.log("Arquivo encontrado:", arquivoParaLer)

        //Lê o conteúdo do arquivo
        let conteudo = await lerArquivo(arquivoParaLer);
        console.log("Conteúdo do arquivo:", conteudo);

        //Reescreve o conteúdo do arquivo
        let textoNovo = 'escrita... '
        await reescreverArquivo(arquivoParaLer, textoNovo);
        conteudo = await lerArquivo(arquivoParaLer);
        console.log("Conteúdo do arquivo reescrito:", conteudo);

        //Adiciona conteúdo ao arquivo
        textoNovo = 'Continuando a escrita...'
        await escreverArquivo(arquivoParaLer, textoNovo)
        conteudo = await lerArquivo(arquivoParaLer);
        console.log("Conteúdo do arquivo adicionado:", conteudo);

        //Renomear arquivo
        let nomeArquivoAntigo = 'teste.txt';
        arquivoParaLer = await procurarArquivo(caminho, nomeArquivoAntigo);
        let novoNomeArquivo = 'teste2.txt'
        let novoArquivo = path.resolve(caminho, novoNomeArquivo)
        if(arquivoParaLer){
            await renomearArquivo(arquivoParaLer, novoArquivo)
        }else{
            arquivoParaLer = await procurarArquivo(caminho, novoNomeArquivo);
            novoArquivo = path.resolve(caminho, nomeArquivoAntigo)
            await renomearArquivo(arquivoParaLer, novoArquivo)
        }
        
        //Excluir arquivo
        let nomeArquivoExcluir = 'arquivoexclusao'
        arquivoParaLer = await procurarArquivo(caminho, nomeArquivoExcluir);
        await excluirArquivo(arquivoParaLer)

        //criar diretorio
        let nomeDiretorioNovo = 'diretorio'
        let caminhoDiretorioNovo = path.resolve(caminho, nomeDiretorioNovo)
        //await criarDiretorio(caminhoDiretorioNovo)
        

        //excluir diretorio
        //await excluirDiretorio(caminhoDiretorioNovo)

        //listar diretorio
        let diretorioParaListar = 'pastas'
        let caminhoDiretorio = path.resolve(caminho, diretorioParaListar)
        await listarDiretorio(caminhoDiretorio)

        //Verificação de stats
        let arquivoLerStats = 'pastas'
        arquivoParaLer = await procurarArquivo(caminho, arquivoLerStats);
        console.log(arquivoParaLer)
        let status = await verificarStats(arquivoParaLer)
        console.log(`Tamanho: ${status.size}, Data de criação: ${status.birthtime}, Arquivo: ${status.isFile()}, Diretorio: ${status.isDirectory()}`)

        //Mover arquivo (Cópia + Remoção)
        let arquivoOrigem = path.resolve(caminho, 'diretorio', 'arquivoParaMover.txt')
        let arquivoDestino = path.resolve(caminho, 'pastas', 'arquivoMovido.txt')
        await moverArquivo(arquivoOrigem, arquivoDestino)

    } catch (erro) {
        console.error("Erro:", erro.message);
    }
})();