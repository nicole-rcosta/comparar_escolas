
const codigoA = document.querySelectorAll('unidade__input unidadeA__codigo');
const cidadeA = document.querySelectorAll('unidade__input unidadeA__cidade');
const anoConstrucaoA = document.querySelectorAll('unidade__input unidadeA__ano');
const qtdeCursosA = document.querySelectorAll('unidade__input unidadeA__cursos');

const codigoB = document.querySelectorAll('unidade__input unidadeB__codigo');
const cidadeB = document.querySelectorAll('unidade__input unidadeB__cidade');
const anoConstrucaoB = document.querySelectorAll('unidade__input unidadeB__ano');
const qtdeCursosB = document.querySelectorAll('unidade__input unidadeB__cursos');



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




function mostrarResultado(mensagem) {
  textoResultado.textContent = mensagem;
}

if (isNaN(this.codigo) || isNaN(this.cidade) || this.anoConstrucao <= 0 || this.qtdeCursos <= 0) {
  mostrarResultado('Preencha todos os campos para criar a escola.');
  return;
}




const escolaA = new Senai(codigoA, cidadeA, anoConstrucaoA, qtdeCursosA)
function instanciarEscolaA(){
  escolaA.querySelectorAll('unidade__botao unidadeA__instanciar')
}


const escolaB = new Senai(codigoB, cidadeB, anoConstrucaoB, qtdeCursosB)
function instanciarEscolaB(){
  escolaB.querySelectorAll('unidade__botao unidadeB__instanciar')
}


/* 🚨NÃO ALTERAR A CLASSE 🚨 */


/* 🚨NÃO ALTERAR A CLASSE 🚨 */



/* SUGESTÃO DE LÓGICA PARA O DESENVOLVIMENTO */



/* ===== OBTER ELEMENTOS ===== */



/* ===== FUNÇÃO DE VALIDAÇÃO ===== */



/* ===== INSTANCIAR ESCOLA A ===== */



/* ===== INSTANCIAR ESCOLA B ===== */


/* ===== ABRIR ESCOLA ===== */


/* ===== FECHAR ESCOLA ===== */


/* ===== RELATÓRIO DE COMPARAÇÃO ===== */

const compararEscolas = (e1, e2) => {
  console.log(`> Comparando oferta de cursos: ${e1.cidadeA} vs ${e2.cidadeB}...`)

  if (e1.qtdeCursosA > e2.qtdeCursosB){
    textoResultado.textContent = (`Resultado: O SENAI ${e1.cidadeA} possui mais cursos.`);
  } else if (e2.qtdeCursosB > e1.qtdeCursosA) {
    textoResultado.textContent = (`Resultado: O SENAI ${e2.cidadeB} possui mais cursos.`);
  } else {
    textoResultado.textContent = (`Resultado: Ambas as unidades possuem a mesma quantidade de cursos.`);
  }
  console.log(`Status: ${e1.cidadeA} (${e1.qtdeCursosA}) | ${e2.qtdeCursosB} (${e2.qtdeCursosB})\n`);
}

compararEscolas(escolaA, escolaB);


/* ===== NOVA CONSULTA ===== */

function limparCampos() {
    onclick('botao botao--reset sistema__reset')
    this.codigo,this.cidade,this.anoConstrucao,this.qtdeCursos.reset();
    this.cidade.focus();
}

