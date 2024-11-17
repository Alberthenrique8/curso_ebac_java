let saudar: string = 'Olá '
let nome : string = 'Joao'

function saudacao(saudar:string, nome:string):string {
    return saudar+' '+nome
}

const resultados = saudacao(saudar,nome)
console.log(resultados, 'como vai?')