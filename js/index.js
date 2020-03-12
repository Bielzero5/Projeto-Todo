let botao = document.querySelector("#cadastrar");

botao.addEventListener("click", function (evento) {
    evento.preventDefault();
    let formulario = document.querySelector("#form-item")
    let item = carregarItem(formulario)
    //console.log("Clicou")
    if (item) {
        montarDiv(item);
        formulario.reset();
    }
});

function montarDiv(item) {
    let divisor = document.querySelector("#nova-tarefa");
    let novaDiv = document.createElement("div");
    novaDiv.classList.add("nota");

    divisor.appendChild(novaDiv, item.color);
    novaDiv.appendChild(montarTitulo(item.tarefa, "titulo"));
    novaDiv.appendChild(montarLinha(item.descricao, "linha"));
    
}

function montarLinha(valor, classe ) {
    let novaLinha = document.createElement("p");
    novaLinha.textContent = valor;
    novaLinha.classList.add(classe);
    return novaLinha;
}

function montarTitulo(valor, classe ) {
    let novoTitulo = document.createElement("h2");
    novoTitulo.textContent = valor;
    novoTitulo.classList.add(classe);
    return novoTitulo;
}

function carregarItem(form) {
    let item = {
        tarefa: form.tarefa.value,
        descricao: form.descricao.value,
        color: form.color.value
    }
    return item
}