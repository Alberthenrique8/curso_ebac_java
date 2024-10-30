const alunos = [
   {Nome:'Ana', nota: 1.6},
   {Nome:'Pedro', nota: 2.6},
   {Nome:'Matheus', Nota: 4.6},
   {Nome:'Gabriel', nota: 3.6},
   {Nome:'Julia', nota: 6.6},
   {Nome:'Antony', nota: 9.6},
   {Nome:'Gabriela', nota: 4.6},
   {Nome:'Joao', nota: 2.6},
   {Nome:'Bruna', nota: 7.6},
   {Nome:'Carlos', nota: 8.6},
   {Nome:'Luana', nota: 10.5}
];

function filtrarAlunos (alunos) {
    return alunos.filter(alunos => alunos.nota >= 6);
}

const alunosAprovados = filtrarAlunos(alunos);
console.log('alunosAprovados',alunosAprovados)