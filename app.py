from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

alunos = []

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/cadastrar", methods=["POST"])
def cadastrar():
    dados = request.get_json()

    nome = dados["nome"]
    idade = dados["idade"]
    curso = dados["curso"]

    aluno = {
        "nome": nome,
        "idade": idade,
        "curso": curso
    }

    alunos.append(aluno)

    return jsonify({
        "message": "Aluno cadastrado com sucesso!",
        "total_alunos": len(alunos),
        "alunos": alunos
    })

@app.route("/limpar", methods=["POST"])
def limpar():
    alunos.clear()

    return jsonify({
        "message": "Lista de alunos limpa!",
        "total_alunos": len(alunos),
        "alunos": alunos
    })

if __name__ == "__main__":    app.run(debug=True)