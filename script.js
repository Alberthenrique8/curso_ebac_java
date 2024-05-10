

const localStorageKey = 'minha-lista'

function newtask()
{
    let input = document.getElementById('Sua-Tarefa')
    if(!input.value)
{
    alert("Por Favor Insira alguma Tarefa")
}
    else
    {
        let value = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
            
    value.push({
        name: input.value
    })
    localStorage.setItem(localStorageKey,JSON.stringify(value))
    showValue()
}
}

function showValue()
{
    let value = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('my-list')
    list.innerHTML = ''
    for(let i = 0; i < value.length; i++)
        {
            list.innerHTML += `<li>${value[i] ['name']}</li>`
        }
}

const tabelaraiz = document.querySelector('my-list')
tabelaraiz.addEventListener('click', function (e) {
    if(e.target.classList.contains('content--body')){
        e.target.classList.remove('content--body')
    }else{
        e.target.classList.add('content--body')
    }
})

MinhaSubli.addEventListener('click' , event => {
    if(e.target.classList.contains('content--body')){
        e.target.classList.remove('content--body')
    }else{
        e.target.classList.add('content--body')
    }
})
showValue()

function newtask() {
    var inputValue = document.getElementById("Sua-Tarefa").value;
    var li = document.createElement("li");
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    document.getElementById("my-list").appendChild(li);
    document.getElementById("Sua-Tarefa").value = "";

    
    li.onclick = function() {
        this.style.textDecoration = (this.style.textDecoration === "line-through") ? "none" : "line-through";
    };
}


