function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz óla como vai?");
    }

    this.dizOi2 = function() {
        console.log(this.nome + " Sou o Gerente, Prazer em conhecer ");
    }

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    this.dizSalario = function () {
        console.log(this.salario);
    }

}

    function Funcionario(nome, cargo, salario) {
        this.cargo = cargo;
        this.salario = salario;

        Pessoa.call(this, nome);
}


function Gerente(nome, cargo, salario,) {
    this.cargo = cargo;
    this. salario = salario;
    Pessoa.call(this, nome)
}



const Funcionario1 = new Funcionario("Albert" , "dev-front", 2500);
const gerente1 = new Gerente("thiago", "senior", 7300)

Funcionario1.dizOi();
Funcionario1.dizCargo();
Funcionario1.dizSalario();
gerente1.dizOi2();
gerente1.dizCargo();
gerente1.dizSalario();


