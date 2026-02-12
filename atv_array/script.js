let frutas = [];

function mostrarFrutas() {

    let resultadoDiv = document.getElementById('resultado');

    if (frutas.length === 0) {

        resultadoDiv.innerHTML = `
        <strong>Array completo:</strong> [] <br>
        <strong>Quantidade de frutas:</strong> 0 <br>
        <em>O array está vazio.</em>
        `;
        
    } else {
        resultadoDiv.innerHTML = `
        <strong>Array completo:</strong> [${frutas.join(", ")}] <br>
        <strong>Quantidade de frutas:</strong> ${frutas.length} <br>
        `;
    }
}

function adicionarFruta() {

    let novaFruta = prompt("Digite o nome da fruta:");

    if (novaFruta) {

        frutas.push(novaFruta);

        mostrarFrutas();
    }
}

function removerUltima() {

    if (frutas.length > 0) {

        frutas.pop();

    } else {

        alert ("O array já está vazio!");
    }

    mostrarFrutas();
}

mostrarFrutas();