

/* 🚨NÃO ALTERAR A CLASSE 🚨 */

class Senai {
  constructor(codigo, cidade, anoConstrucao, qtdeCursos) {
    this.codigo = codigo;
    this.cidade = cidade;
    this.anoConstrucao = anoConstrucao;
    this.qtdeCursos = qtdeCursos;

    this.idade = new Date().getFullYear() - anoConstrucao;
    this.statusFuncionamento = false;
  }

  abrirEscola() {
    this.statusFuncionamento = true;
    console.log(`Aberta: Bem-vindos ao SENAI ${this.cidade}`);
  }
  

  fecharEscola() {
    this.statusFuncionamento = false;
    console.log(`Fechada: Atividades encerradas.`)
  }

}
/* 🚨NÃO ALTERAR A CLASSE 🚨 */



/* SUGESTÃO DE LÓGICA PARA O DESENVOLVIMENTO */



/* ===== OBTER ELEMENTOS ===== */

const codigoA = document.querySelectorAll('unidade__input unidadeA__codigo');
const cidadeA = document.querySelectorAll('unidade__input unidadeA__cidade');
const anoConstrucaoA = document.querySelectorAll('unidade__input unidadeA__ano');
const qtdeCursosA = document.querySelectorAll('unidade__input unidadeA__cursos');

const codigoB = document.querySelectorAll('unidade__input unidadeB__codigo');
const cidadeB = document.querySelectorAll('unidade__input unidadeB__cidade');
const anoConstrucaoB = document.querySelectorAll('unidade__input unidadeB__ano');
const qtdeCursosB = document.querySelectorAll('unidade__input unidadeB__cursos');



/* ===== FUNÇÃO DE VALIDAÇÃO ===== */

function mostrarResultado(mensagem) {
  textoResultado.textContent = mensagem;
}

if (isNaN(this.codigo) || isNaN(this.cidade) || this.anoConstrucao <= 0 || this.qtdeCursos <= 0) {
  mostrarResultado('Preencha todos os campos para criar a escola.');
  return;
}



/* ===== INSTANCIAR ESCOLA A ===== */

const escolaA = new Senai(codigoA, cidadeA, anoConstrucaoA, qtdeCursosA)
function instanciarEscolaA(){

}


/* ===== INSTANCIAR ESCOLA B ===== */


/* ===== ABRIR ESCOLA ===== */



/* ===== FECHAR ESCOLA ===== */


/* ===== RELATÓRIO DE COMPARAÇÃO ===== */


/* ===== NOVA CONSULTA ===== */

function limparCampos() {
    onclick('botao botao--reset sistema__reset')
    this.codigo,this.cidade,this.anoConstrucao,this.qtdeCursos.reset();
    this.cidade.focus();
}

