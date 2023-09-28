function mensagemBoasVindasPadraoFunction(){
    return  console.log("Bem vindo")
}

function mensagemBoasVindasPadraoFunctionComParametro(mensagem){
    return  console.log(mensagem)
}

const mensagemDeBoasVindas = () => {
    return  console.log("Bem vindo")
}

const mensagemDeBoasVindasComParametro = (mensagem) => {
    return  console.log(mensagem)
}

//Maneiras diferentes de criari uma função que retorna uma menssagem e imprime uma string no console

mensagemDeBoasVindas()
mensagemDeBoasVindasComParametro()
mensagemBoasVindasPadraoFunction()
mensagemBoasVindasPadraoFunctionComParametro()
