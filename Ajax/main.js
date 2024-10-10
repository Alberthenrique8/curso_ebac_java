document.addEventListener('DOMContentLoaded', function() {
    const reposi = document.querySelector('#reposi');
    const seguidores = document.querySelector('#seguidores');
    const seguidos = document.querySelector('#seguidos');
    const linkGit = document.querySelector('#linkGit');
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');

    
    try {
        fetch('https://api.github.com/users/Alberthenrique8')
        .then(function(res) {
            if (!res.ok) { 
                throw new Error('Erro na requisição: ' + res.status);
            }
            return res.json();
        })
        .then(function(json) {
            
            name.innerText = json.name || 'Nome não disponível';
            username.innerText = json.login || 'Username não disponível';
            avatar.src = json.avatar_url || 'https://via.placeholder.com/180x180';
            reposi.innerText = json.public_repos !== null ? json.public_repos : 'N/A';
            seguidores.innerText = json.followers !== null ? json.followers : 'N/A';
            seguidos.innerText = json.following !== null ? json.following : 'N/A';
            linkGit.href = json.html_url || '#';
        })
        .catch(function(erro) {
            
            console.error('Erro ao obter os dados da API:', erro.message);
            name.innerText = "Erro ao carregar dados.";
        });
    } catch (erro) {
        
        console.error('Erro inesperado:', erro.message);
        name.innerText = "Erro inesperado.";
    }
});
