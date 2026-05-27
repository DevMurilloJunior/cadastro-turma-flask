function cadastrarAluno() {
    if (nome === "" || idade === "" || curso === "") {

    document.getElementById("mensagem").textContent =
    "Preencha todos os campos!";

    return;
}

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const curso = document.getElementById("curso").value;

    fetch("/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            idade: idade,
            curso: curso
        })
    })

    .then(resposta => resposta.json())

    .then(dados => {

        document.getElementById("mensagem").textContent = dados.message;

        document.getElementById("totalAlunos").textContent = dados.total_alunos;

        let lista = "";

        dados.alunos.forEach(aluno => {

            lista += `
                <p>
                    ${aluno.nome} - ${aluno.idade} anos - ${aluno.curso}
                </p>
            `;
        });

        document.getElementById("listaAlunos").innerHTML = lista;

    });

}

function limparLista() {

    fetch("/limpar", {
        method: "POST"
    })

    .then(resposta => resposta.json())

    .then(dados => {

        document.getElementById("mensagem").textContent = dados.message;

        document.getElementById("totalAlunos").textContent = dados.total_alunos;

        document.getElementById("listaAlunos").innerHTML = "";

    });

}