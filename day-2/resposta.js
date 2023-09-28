const somaDeDoisNumeros = (numA, numB) =>{
    const sum = numA + numB
    const resultado =  `A some de ${numA} + ${numB} é igual a ${sum}`
    return resultado
}

const subtraiDeDoisNumeros = (numA, numB) =>{
    const sub = numA - numB
    const resultado =  `A subtração de ${numA} - ${numB} é igual a ${sub}`
    return resultado
}

const multiplicaDeDoisNumeros = (numA, numB) =>{
    const mult = numA * numB
    const resultado =  `A multiplicação de ${numA} * ${numB} é igual a ${mult}`
    return resultado
}

const divideDeDoisNumeros = (numA, numB) =>{
    const mult = numA / numB
    const resultado =  `A divisão de ${numA}  / ${numB} é igual a ${mult}`
    return resultado
}

const restoDeDoisNumeros = (numA, numB) =>{
    const mult = numA % numB
    const resultado =  `O resto de ${numA}  % ${numB} é igual a ${mult}`
    return resultado
}

console.log(somaDeDoisNumeros(2,2))
console.log(subtraiDeDoisNumeros(9, 5))
console.log(multiplicaDeDoisNumeros(5,2))
console.log(divideDeDoisNumeros(15,5))
console.log(restoDeDoisNumeros(23,7))