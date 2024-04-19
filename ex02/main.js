document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    var campoA = parseInt(document.getElementById('campoA').value);
    var campoB = parseInt(document.getElementById('campoB').value);
        if (campoB > campoA) {
        document.getElementById('mensagem').innerText = "Formulário válido!";
        document.getElementById('mensagem').style.color = "green";
    } else {
        document.getElementById('mensagem').innerText = "Formulário inválido. O número B precisa ser maior que o número A.";
        document.getElementById('mensagem').style.color = "red";
    }
});