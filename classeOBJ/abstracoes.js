function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz óla como vai?");
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




const Funcionario1 = new Funcionario("Albert" , "dev-front", 5000);
Funcionario1.dizOi();
Funcionario1.dizCargo();
Funcionario1.dizSalario();


